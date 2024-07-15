
export type MachineSetupForm = {
  id: string,
  title?: string, // customer name
  typeOfSale?: string
  warehouse?: string,
}

// export type SalesFulfillmentStatus = {
//   id: string,
//   title?: string, // customer name
//   phase?: string
//   typeOfSale?: string
//   warehouse?: string,
//   model?: string,
//   OpType?: z2t_type,
//   DeliveryDate?: Date,
//   isDateConfirmed: boolean,
//   salesResponsible?: string,
//   requirements: {
//     //Machine Delivered to Customer
//     MDC: boolean,
//     //Sales Agreement
//     SA: boolean,
//     //Data Auth
//     DA: axa_salesfulfillmentstatus_axa_salesfulfillmentstatus_axa_doescustomerhavedatagovernanceform,
//     //Delivery Service Record
//     DSR: boolean,
//     CWS: axa_cwsstatus,
//   }
//   department: { [department: string]: axa_departmentfulfillmentstatus_axa_departmentfulfillmentstatus_axa_fulfillmentstatus }
// }
