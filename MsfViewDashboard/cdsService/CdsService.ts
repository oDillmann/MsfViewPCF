import {
  axa_DealSetupFormAttributes,
  axa_dealsetupformMetadata,
} from "../cds-generated/entities/axa_DealSetupForm";
import { axa_SalesFulfillmentStatusAttributes } from "../cds-generated/entities/axa_SalesFulfillmentStatus";
import {
  OpportunityAttributes,
  opportunityMetadata,
} from "../cds-generated/entities/Opportunity";
import {
  SystemUserAttributes,
  systemuserMetadata,
} from "../cds-generated/entities/SystemUser";
import { IInputs } from "../generated/ManifestTypes";
import { SalesFulfillmentStatus } from "../types/SalesFulfillmentStatus";

export default class CdsService {
  public static readonly serviceName = "CdsService";
  public Context: ComponentFramework.Context<IInputs>;
  departmentAlias = "department";
  opportunityAlias = "opportunity";
  dsfAlias = "DSF";
  departmentFulfillmentStatusAlias = "departmentfulfillmentstatus";
  salesResAlias = "salesresponsible";

  constructor(context: ComponentFramework.Context<IInputs>) {
    this.Context = context;
  }

  public async fetchData() {
    // const DFSFetchXml = [
    //   "?fetchXml=",
    //   "<fetch>",
    //   `  <entity name='${axa_salesfulfillmentstatusMetadata.logicalName}'>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Description}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_MachineDeliveredtoCustomer}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoesCustomerhavedatagovernanceform}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_TypeofSale}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsibleName}'/>`,
    //   `    <attribute name='${axa_SalesFulfillmentStatusAttributes.axa_Warehouse}'/>`,
    //   `    <link-entity name='systemuser' from='systemuserid' to='${axa_SalesFulfillmentStatusAttributes.axa_SalesResponsible}' link-type='outer' alias='${this.salesResponsible}'>`,
    //   "      <attribute name='fullname'/>",
    //   "    </link-entity>",
    //   `    <link-entity name='${axa_dealsetupformMetadata.logicalName}' from='${axa_DealSetupFormAttributes.axa_DealSetupFormId}' to='${axa_SalesFulfillmentStatusAttributes.axa_DSF}' link-type='outer' alias='${this.dsfAlias}'>`,
    //   `    <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment_Name}'/>`,
    //   `    <attribute name='${axa_DealSetupFormAttributes.axa_Salesagreementattachment2_Name}'/>`,
    //   `    <attribute name='${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}'/>`,
    //   `    <attribute name='${axa_DealSetupFormAttributes.axa_CWSID}'/>`,
    //   `      <link-entity name='${opportunityMetadata.logicalName}' from='${OpportunityAttributes.OpportunityId}' to='${axa_DealSetupFormAttributes.axa_Opportunity}' link-type='outer' alias='${this.opportunityAlias}'>`,
    //   `        <attribute name='${OpportunityAttributes.z2t_OpType}'/>`,
    //   "      </link-entity>",
    //   "    </link-entity>",
    //   `    <order attribute='${axa_SalesFulfillmentStatusAttributes.axa_ESD}'/>`,
    //   "  </entity>",
    //   "</fetch>",
    // ].join("");

    const DFSFetchXml = [
      "?fetchXml=",
      // all fields from the deal setup form
      // warehouse is from the quote
      // sales responsible is from the systemuser
      "<fetch>",
      `  <entity name='${axa_dealsetupformMetadata.logicalName}'>`,
      `    <link-entity name='${systemuserMetadata.logicalName}' from='${SystemUserAttributes.SystemUserId}' to='${axa_DealSetupFormAttributes.axa_Salesperson}' link-type='outer' alias='${this.salesResAlias}'>`,
      "      <attribute name='fullname'/>",
      "    </link-entity>",
      `    <link-entity name='${opportunityMetadata.logicalName}' from='${OpportunityAttributes.OpportunityId}' to='${axa_DealSetupFormAttributes.axa_Opportunity}' link-type='outer' alias='${this.opportunityAlias}'>`,
      `      <attribute name='${OpportunityAttributes.z2t_OpType}'/>`,
      "    </link-entity>",
      "  </entity>",
    ].join("");

    const records = await this.Context.webAPI.retrieveMultipleRecords(
      "axa_salesfulfillmentstatus",
      DFSFetchXml
    );
    const formattedResult = this.formatRecords(records.entities);

    return { records: formattedResult };
  }

  private formatRecords(
    data: ComponentFramework.WebApi.Entity[]
  ): Record<string, SalesFulfillmentStatus> {
    const SFS: Record<string, SalesFulfillmentStatus> = {};

    data.forEach(item => {
      const estimatedDate = item[axa_SalesFulfillmentStatusAttributes.axa_ESD];
      const confirmedDate =
        item[axa_SalesFulfillmentStatusAttributes.axa_ConfirmedDeliveryDate];
      const id =
        item[axa_SalesFulfillmentStatusAttributes.axa_SalesFulfillmentStatusId];
      if (!SFS[id]) {
        SFS[id] = {
          id,
          title: item[axa_SalesFulfillmentStatusAttributes.axa_Description],
          salesResponsible: item[`${this.salesResAlias}.fullname`],
          phase: item[axa_SalesFulfillmentStatusAttributes.axa_CurrentPhase],
          typeOfSale: item[axa_SalesFulfillmentStatusAttributes.axa_TypeofSale],
          DeliveryDate: confirmedDate
            ? new Date(confirmedDate)
            : estimatedDate
            ? new Date(estimatedDate)
            : undefined,
          OpType:
            item[
              `${this.opportunityAlias}.${OpportunityAttributes.z2t_OpType}`
            ],
          isDateConfirmed: !!confirmedDate,
          warehouse: item[axa_SalesFulfillmentStatusAttributes.axa_Warehouse],
          requirements: {
            MDC: item[
              `${axa_SalesFulfillmentStatusAttributes.axa_MachineDeliveredtoCustomer}`
            ]
              ? true
              : false,
            SA: item[
              `${this.dsfAlias}.${axa_DealSetupFormAttributes.axa_Salesagreementattachment_Name}`
            ]
              ? true
              : false,
            DA: item[
              axa_SalesFulfillmentStatusAttributes
                .axa_DoesCustomerhavedatagovernanceform
            ],
            DSR: item[
              `${this.dsfAlias}.${axa_DealSetupFormAttributes.axa_DeliveryServiceRecord_Name}`
            ]
              ? true
              : false,
            CWS: item[
              axa_SalesFulfillmentStatusAttributes.axa_DoescustomerhaveCWS
            ],
          },
          department: {},
        };
      }
    });
    return SFS;
  }
}
