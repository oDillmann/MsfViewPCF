import { makeAutoObservable } from "mobx";
import CdsService from "../cdsService/CdsService";
import { IInputs } from "../generated/ManifestTypes";
import ServiceProvider from "../ServiceProvider";
import { MachineSetupForm } from "../types/MachineSetupForm";
import { axa_DealSetupFormAttributes, axa_dealsetupformMetadata } from "../cds-generated/entities/axa_DealSetupForm";

export enum ViewType { "Sales Responsible", "Warehouse", }

export default class MsfViewVM {
  public static readonly serviceName = "MsfViewVM";
  public serviceProvider: ServiceProvider;
  public context: ComponentFramework.Context<IInputs>;
  public notifyOutputChanged: () => void;
  public cdsService: CdsService;
  public errorMessage?: string = undefined;
  public Records: MachineSetupForm[] = [];
  public PCFerror?: string = undefined;
  public isReadOnly?: boolean = false;
  public isViewLoading: boolean = true;
  get isLoading() {
    return this.isViewLoading;
  }
  public forceUpdate: () => void;
  private viewType: ViewType = ViewType.Warehouse;
  get ViewType() {
    return this.viewType;
  }
  set ViewType(value) {
    this.viewType = value;
  }
  saveHandlerAdded: any;

  constructor(serviceProvider: ServiceProvider) {
    this.serviceProvider = serviceProvider;
    this.context = serviceProvider.get("context");
    this.notifyOutputChanged = serviceProvider.get("notifyOutputChanged");
    this.cdsService = serviceProvider.get(CdsService.serviceName);
    this.isReadOnly = this.context.parameters.ConfigurationOption.raw === "ReadOnly";
    makeAutoObservable(this);
  }

  public setAppError(errorMessage: string | undefined) {
    this.PCFerror = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  public setError(errorMessage: string | undefined) {
    this.errorMessage = errorMessage;
    if (this.forceUpdate) this.forceUpdate();
  }

  // Helper function for grouping
  private groupBy<SFS, Prop extends string | undefined>(
    data: SFS[],
    propExtractor: (item: SFS) => Prop,
    emptyPropValue: string
  ): Record<string, SFS[]> {
    return data.reduce((acc, item) => {
      const prop = propExtractor(item) ?? emptyPropValue;
      if (!acc[prop]) {
        acc[prop] = [];
      }
      acc[prop].push(item);
      return acc;
    }, {} as Record<string, SFS[]>);
  }

  // Helper function for sorting
  private sortByKeys<SFS>(
    grouped: Record<string, SFS[]>,
    comparator?: (a: string, b: string) => number
  ) {
    const orderedKeys = Object.keys(grouped).sort(comparator);
    return orderedKeys.reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, SFS[]>);
  }

  get groupedByWarehouse() {
    const grouped = this.groupBy(
      this.Records,
      sfs => sfs.warehouse,
      "No Warehouse"
    );
    return this.sortByKeys(grouped, (a, b) =>
      a === "No Warehouse" ? 1 : b === "No Warehouse" ? -1 : a.localeCompare(b)
    );
  }

  get groupBySalesResponsible() {
    const grouped = this.groupBy(
      this.Records,
      sfs => sfs.salesResponsible,
      "No Sales Responsible"
    );
    return this.sortByKeys(grouped, (a, b) =>
      a === "No Sales Responsible"
        ? 1
        : b === "No Sales Responsible"
          ? -1
          : a.localeCompare(b)
    );
  }

  public formatViewRecords(records: {
    [id: string]: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
  }): void {
    const formattedRecords: MachineSetupForm[] = [];
    for (const recordId in records) {
      const record = records[recordId];
      const formattedRecord = this.formatViewRecord(record, recordId);
      formattedRecords.push(formattedRecord);
    }
    this.Records = formattedRecords.sort((a, b) => {
      // sort by date
      if (a.estimatedDelivery && b.estimatedDelivery) {
        return a.estimatedDelivery.getTime() - b.estimatedDelivery.getTime();
      }
      return 0;
    });
  }

  private formatViewRecord(
    record: ComponentFramework.PropertyHelper.DataSetApi.EntityRecord,
    recordId: string
  ): MachineSetupForm {
    const guid = recordId;
    const id = record.getFormattedValue(axa_DealSetupFormAttributes.axa_DealID);
    const inStock = record.getFormattedValue(axa_DealSetupFormAttributes.axa_InStock) === "Yes" ? true : false;
    const serialNumber = record.getFormattedValue(axa_DealSetupFormAttributes.axa_SerialNumber);
    const typeOfSale = record.getFormattedValue(axa_DealSetupFormAttributes.axa_TypeofSale);
    const completedDate = record.getFormattedValue(axa_DealSetupFormAttributes.axa_CompletedDate);
    const MsfStatus = record.getFormattedValue(axa_DealSetupFormAttributes.axa_DSFstatus);
    const model = record.getFormattedValue(axa_DealSetupFormAttributes.axa_Model);
    let estimatedDelivery = record.getFormattedValue(axa_DealSetupFormAttributes.axa_EstimatedMachineArrival)
      ? new Date(record.getFormattedValue(axa_DealSetupFormAttributes.axa_EstimatedMachineArrival)) : undefined;
    // @ts-ignore
    const warehouseAttr = Object.keys(record._record.fields).find(key => key.endsWith("warehouse"));
    // @ts-ignore
    const warehouse = record._record.fields[warehouseAttr]?.innerValue?.value;
    // @ts-ignore
    const salesRepFullnameAttr = Object.keys(record._record.fields).find(key => key.endsWith("fullname"));
    // @ts-ignore
    const salesResponsible = record._record.fields[salesRepFullnameAttr]?.innerValue?.value;
    // @ts-ignore
    const customerNameAttr = Object.keys(record._record.fields).find((key) => key.endsWith('.name'));
    // @ts-ignore
    const customerName = record._record.fields[customerNameAttr]?.innerValue?.value;

    return { id, guid, customerName, warehouse, typeOfSale, inStock, serialNumber, completedDate, estimatedDelivery, salesResponsible, MsfStatus, model };
  }

  public async completeMsf(guid: string, completedDate: Date): Promise<void> {
    await this.context.webAPI.updateRecord(axa_dealsetupformMetadata.logicalName, guid, { [axa_DealSetupFormAttributes.axa_CompletedDate]: completedDate });
    //refresh the view
    this.context.parameters.MachineSetupForm.refresh();
  }
}
