import { IInputs } from "../generated/ManifestTypes";
import { MachineSetupForm } from "../types/MachineSetupForm";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async fetchData() {
    // fetch some data
    // format the data with the formatRecords method
    // return the formatted data
  }

  public formatRecords(
    data: ComponentFramework.WebApi.Entity[]
  ): Record<string, MachineSetupForm> {
    const SFS: Record<string, MachineSetupForm> = {};

    data.forEach(() => {
    });
    return SFS;
  }
}
