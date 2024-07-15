import { axa_cwsstatus } from "../cds-generated/enums/axa_cwsstatus"
import { axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus } from "../cds-generated/enums/axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus"
import { axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform } from "../cds-generated/enums/axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform"
import { z2t_type } from "../cds-generated/enums/z2t_type"

export type SalesFulfillmentStatus = {
  id: string,
  title?: string, // customer name
  phase?: string
  typeOfSale?: string
  warehouse?: string,
  model?: string,
  OpType?: z2t_type,
  DeliveryDate?: Date,
  isDateConfirmed: boolean,
  salesResponsible?: string,
  requirements: {
    //Machine Delivered to Customer
    MDC: boolean,
    //Sales Agreement
    SA: boolean,
    //Data Auth
    DA: axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform,
    //Delivery Service Record
    DSR: boolean,
    CWS: axa_cwsstatus,
  }
  department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
}
