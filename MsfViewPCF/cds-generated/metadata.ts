/* eslint-disable*/
import { axa_dealsetupformMetadata } from "./entities/axa_DealSetupForm";
import { quoteMetadata } from "./entities/Quote";
import { systemuserMetadata } from "./entities/SystemUser";

export const Entities = {
  axa_DealSetupForm: "axa_dealsetupform",
  Quote: "quote",
  SystemUser: "systemuser",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    axa_dealsetupform: axa_dealsetupformMetadata,
    quote: quoteMetadata,
    systemuser: systemuserMetadata,
  },
  actions: {
  }
};