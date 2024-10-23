import { axa_dealsetupform_axa_dealsetupform_axa_dsfstatus } from "../cds-generated/enums/axa_dealsetupform_axa_dealsetupform_axa_dsfstatus"

export type MachineSetupForm = {
  id: string,
  guid: string,
  customerName?: string, // customer name
  typeOfSale?: string
  estimatedDelivery?: Date,
  completedDate?: string,
  pickupDelivery?: string,
  model?: string,
  serialNumber?: string,
  warehouse?: string,
  quantity?: number,
  MsfStatus?: string,
  inStock?: string,
  salesResponsible?: string,
}
