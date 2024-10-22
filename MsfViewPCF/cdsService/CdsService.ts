import { axa_DealSetupFormAttributes, axa_dealsetupformMetadata } from "../cds-generated/entities/axa_DealSetupForm";
import { axa_SalesFulfillmentStatusAttributes, axa_salesfulfillmentstatusMetadata } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import { IInputs } from "../generated/ManifestTypes";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async fetchData(ids: string[]) {
    // fetch some data
    const DFSFetchXml = [
      "?fetchXml=",
      "<fetch>",
      `  <entity name="${axa_salesfulfillmentstatusMetadata.logicalName}">`,
      `    <attribute name="${axa_SalesFulfillmentStatusAttributes.axa_Warehouse}" />`,
      `    <attribute name="${axa_SalesFulfillmentStatusAttributes.axa_DSF}" />`,
      `    <link-entity name="${axa_dealsetupformMetadata.logicalName}" from="${axa_DealSetupFormAttributes.axa_DealSetupFormId}" to="${axa_SalesFulfillmentStatusAttributes.axa_DSF}" link-type="inner">`,
      `      <filter type="and">`,
      `        <condition attribute="${axa_DealSetupFormAttributes.axa_DealSetupFormId}" operator="in">`,
      ids.map((id) => `<value>${id}</value>`).join(''),
      `        </condition>`,
      `      </filter>`,
      `    </link-entity>`,
      `  </entity>`,
      "</fetch>"
    ].join('');
    const DFS = await this.Context.webAPI.retrieveMultipleRecords(axa_salesfulfillmentstatusMetadata.logicalName, DFSFetchXml);
    // format the data with the formatRecords method
    const formattedDFS = this.formatRecords(DFS.entities);
    // return the formatted data
    return formattedDFS;
  }

  public formatRecords(
    data: ComponentFramework.WebApi.Entity[]
  ): Record<string, string> {
    const MSF: Record<string, string> = {};
    data.forEach(SFS => {
      const id = SFS[`_${axa_SalesFulfillmentStatusAttributes.axa_DSF}_value`];
      const warehouse = SFS[axa_SalesFulfillmentStatusAttributes.axa_Warehouse];
      MSF[id] = warehouse
    });
    return MSF;
  }
}
