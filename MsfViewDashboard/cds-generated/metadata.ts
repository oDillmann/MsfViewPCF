/* eslint-disable*/
import { axa_dealsetupformMetadata } from "./entities/axa_DealSetupForm";
import { axa_salesfulfillmentstatusMetadata } from "./entities/axa_SalesFulfillmentStatus";
import { opportunityMetadata } from "./entities/Opportunity";
import { systemuserMetadata } from "./entities/SystemUser";

export const Entities = {
  axa_DealSetupForm: "axa_dealsetupform",
  axa_SalesFulfillmentStatus: "axa_salesfulfillmentstatus",
  Opportunity: "opportunity",
  SystemUser: "systemuser",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    axa_dealsetupform: axa_dealsetupformMetadata,
    axa_salesfulfillmentstatus: axa_salesfulfillmentstatusMetadata,
    opportunity: opportunityMetadata,
    systemuser: systemuserMetadata,
  },
  actions: {
  }
};