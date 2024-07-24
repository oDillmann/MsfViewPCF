import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import ServiceProvider from "./ServiceProvider";
import CdsService from "./cdsService/CdsService";
import * as ReactDOM from "react-dom";
import { createElement } from "react";
import App from "./components/App";
import MsfViewVM from "./viewModel/MsfViewVM";

export class MsfViewPCF
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private vm: MsfViewVM;
  context: ComponentFramework.Context<IInputs>;
  container: HTMLDivElement;
  private serviceProvider: ServiceProvider;
  /**
   * Empty constructor.
   */
  constructor() { }

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    _state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    console.info("Version 0.0.6");
    this.context = context;
    this.container = container;
    this.serviceProvider = new ServiceProvider();
    this.serviceProvider.register<CdsService>(CdsService.serviceName, new CdsService(context));
    this.serviceProvider.register<ComponentFramework.Context<IInputs>>("context", context);
    this.serviceProvider.register<() => void>("notifyOutputChanged", notifyOutputChanged);
    this.context.parameters.MachineSetupForm.paging.setPageSize(5000);
    this.vm = new MsfViewVM(this.serviceProvider);
    this.serviceProvider.register<MsfViewVM>(MsfViewVM.serviceName, this.vm);
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   * @returns ReactElement root react element for the control
   */
  public updateView(
    _context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const vm = this.serviceProvider.get<MsfViewVM>(MsfViewVM.serviceName);
    if (!_context.parameters.MachineSetupForm.loading) {
      vm.formatViewRecords(_context.parameters.MachineSetupForm.records);
    }
    vm.isViewLoading = _context.parameters.MachineSetupForm.loading
    //because updateView is called twice everytime the form is loaded, we need to make sure we only execute the init method once
    ReactDOM.render(
      createElement(App, {
        serviceProvider: this.serviceProvider,
      }),
      this.container
    );
    return createElement(App, {
      serviceProvider: this.serviceProvider,
    });
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
