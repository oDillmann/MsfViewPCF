/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity Quote
export const quoteMetadata = {
  typeName: "mscrm.quote",
  logicalName: "quote",
  collectionName: "quotes",
  primaryIdAttribute: "quoteid",
  attributeTypes: {
    // Numeric Types
    discountamount: "Money",
    discountamount_base: "Money",
    discountpercentage: "Decimal",
    exchangerate: "Decimal",
    freightamount: "Money",
    freightamount_base: "Money",
    importsequencenumber: "Integer",
    msdyn_adjustedgrossmargin: "Decimal",
    msdyn_customerbudgetrollup: "Money",
    msdyn_customerbudgetrollup_base: "Money",
    msdyn_customerbudgetrollup_state: "Integer",
    msdyn_estimatedcompletionrollup_state: "Integer",
    msdyn_estimatedcost: "Money",
    msdyn_estimatedcost_base: "Money",
    msdyn_estimatedquotemargin: "Decimal",
    msdyn_grossmargin: "Decimal",
    msdyn_invoicesetuptotals: "Money",
    msdyn_invoicesetuptotals_base: "Money",
    msdyn_totalamount: "Money",
    msdyn_totalamount_base: "Money",
    msdyn_totalchargeablecostrollup: "Money",
    msdyn_totalchargeablecostrollup_base: "Money",
    msdyn_totalchargeablecostrollup_state: "Integer",
    msdyn_totalnonchargeablecostrollup: "Money",
    msdyn_totalnonchargeablecostrollup_base: "Money",
    msdyn_totalnonchargeablecostrollup_state: "Integer",
    onholdtime: "Integer",
    revisionnumber: "Integer",
    timezoneruleversionnumber: "Integer",
    totalamount: "Money",
    totalamount_base: "Money",
    totalamountlessfreight: "Money",
    totalamountlessfreight_base: "Money",
    totaldiscountamount: "Money",
    totaldiscountamount_base: "Money",
    totallineitemamount: "Money",
    totallineitemamount_base: "Money",
    totallineitemdiscountamount: "Money",
    totallineitemdiscountamount_base: "Money",
    totaltax: "Money",
    totaltax_base: "Money",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    z2t_subttlamtlessdisc: "Money",
    z2t_subttlamtlessdisc_base: "Money",
    // Optionsets
    axa_printtype: "Optionset",
    crf08_quotationstatus: "Optionset",
    freighttermscode: "Optionset",
    msdyn_competitive: "Optionset",
    msdyn_estimatedbudget: "Optionset",
    msdyn_estimatedschedule: "Optionset",
    msdyn_feasible: "Optionset",
    msdyn_ordertype: "Optionset",
    msdyn_profitability: "Optionset",
    paymenttermscode: "Optionset",
    pricingerrorcode: "Optionset",
    quotecreationmethod: "Optionset",
    shippingmethodcode: "Optionset",
    shipto_freighttermscode: "Optionset",
    skippricecalculation: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    z2t_quotationtype: "Optionset",
    // Date Formats
    closedon: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    crf08_needbydate: "DateOnly:UserLocal",
    crf08_requestedreceiptdate: "DateOnly:UserLocal",
    crf08_requestedshipdate: "DateOnly:UserLocal",
    crf08_validuntil: "DateOnly:UserLocal",
    effectivefrom: "DateOnly:UserLocal",
    effectiveto: "DateOnly:UserLocal",
    expireson: "DateOnly:DateOnly",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    msdyn_customerbudgetrollup_date: "DateAndTime:UserLocal",
    msdyn_estimatedcompletionrollup: "DateOnly:UserLocal",
    msdyn_estimatedcompletionrollup_date: "DateAndTime:UserLocal",
    msdyn_quotelineenddate: "DateOnly:UserLocal",
    msdyn_quotelinestartdate: "DateOnly:UserLocal",
    msdyn_totalchargeablecostrollup_date: "DateAndTime:UserLocal",
    msdyn_totalnonchargeablecostrollup_date: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    requestdeliveryby: "DateOnly:UserLocal",
    z2t_expirationdate: "DateOnly:UserLocal",
    z2t_followupdate: "DateOnly:UserLocal",
    z2t_promisedate: "DateOnly:UserLocal",
  },
  navigation: {
    z2t_salesresponsible: ["mscrm.z2t_salesperson"],
    z2t_prospect: ["mscrm.account"],
    z2t_opportunityid: ["mscrm.opportunity"],
    z2t_invoiceaccount: ["mscrm.account"],
    z2t_equipment: ["mscrm.z2t_equipment"],
    z2t_customeraccount: ["mscrm.account"],
    z2t_Project: ["mscrm.z2t_project"],
    z2t_Model: ["mscrm.z2t_model"],
    z2t_Make: ["mscrm.z2t_make"],
    z2t_Division: ["mscrm.z2t_division"],
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid_processstage: ["mscrm.processstage"],
    sla_quote_sla: ["mscrm.sla"],
    pricelevelid: ["mscrm.pricelevel"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    opportunityid: ["mscrm.opportunity"],
    msdyn_account: ["mscrm.account"],
    msdyn_ContractOrganizationalUnitId: ["mscrm.msdyn_organizationalunit"],
    msdyn_AccountManagerId: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    crf08_ServiceCall: ["mscrm.incident"],
    crf08_SegmentService: ["mscrm.z2t_servicesegment"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    campaignid: ["mscrm.campaign"],
    axa_QuoteId: ["mscrm.opportunity"],
    customerid: ["account","contact"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum QuoteAttributes {
  AccountId = "accountid",
  AccountIdName = "accountidname",
  AccountIdYomiName = "accountidyominame",
  axa_CanvasAppID = "axa_canvasappid",
  axa_PrintType = "axa_printtype",
  axa_QuoteId = "axa_quoteid",
  axa_QuoteIdName = "axa_quoteidname",
  axa_Sendanemail = "axa_sendanemail",
  axa_VersionNumber = "axa_versionnumber",
  BillTo_AddressId = "billto_addressid",
  BillTo_City = "billto_city",
  BillTo_Composite = "billto_composite",
  BillTo_ContactName = "billto_contactname",
  BillTo_Country = "billto_country",
  BillTo_Fax = "billto_fax",
  BillTo_Line1 = "billto_line1",
  BillTo_Line2 = "billto_line2",
  BillTo_Line3 = "billto_line3",
  BillTo_Name = "billto_name",
  BillTo_PostalCode = "billto_postalcode",
  BillTo_StateOrProvince = "billto_stateorprovince",
  BillTo_Telephone = "billto_telephone",
  CampaignId = "campaignid",
  CampaignIdName = "campaignidname",
  ClosedOn = "closedon",
  ContactId = "contactid",
  ContactIdName = "contactidname",
  ContactIdYomiName = "contactidyominame",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  crf08_AbnormalCall = "crf08_abnormalcall",
  crf08_Address = "crf08_address",
  crf08_CATInsurancePremium = "crf08_catinsurancepremium",
  crf08_CATSupport = "crf08_catsupport",
  crf08_Contact = "crf08_contact",
  crf08_Coverletter = "crf08_coverletter",
  crf08_CustomerReferences = "crf08_customerreferences",
  crf08_CustomerRequistion = "crf08_customerrequistion",
  crf08_CVAdetail = "crf08_cvadetail",
  crf08_DeliveryReason = "crf08_deliveryreason",
  crf08_html = "crf08_html",
  crf08_IntroMessageEdit = "crf08_intromessageedit",
  crf08_ModeOfDelivery = "crf08_modeofdelivery",
  crf08_Needbydate = "crf08_needbydate",
  crf08_Note = "crf08_note",
  crf08_QuotationStatus = "crf08_quotationstatus",
  crf08_RequestedReceiptDate = "crf08_requestedreceiptdate",
  crf08_RequestedShipDate = "crf08_requestedshipdate",
  crf08_SalesManager = "crf08_salesmanager",
  crf08_Salesperson = "crf08_salesperson",
  crf08_SalesPersonEmail = "crf08_salespersonemail",
  crf08_SalesPersonPhone = "crf08_salespersonphone",
  crf08_SalesPool = "crf08_salespool",
  crf08_SegmentService = "crf08_segmentservice",
  crf08_SegmentServiceName = "crf08_segmentservicename",
  crf08_ServiceCall = "crf08_servicecall",
  crf08_ServiceCallName = "crf08_servicecallname",
  crf08_Telephone = "crf08_telephone",
  crf08_ValidUntil = "crf08_validuntil",
  crf08_Warehouse = "crf08_warehouse",
  CustomerId = "customerid",
  CustomerIdName = "customeridname",
  CustomerIdType = "customeridtype",
  CustomerIdYomiName = "customeridyominame",
  Description = "description",
  DiscountAmount = "discountamount",
  DiscountAmount_Base = "discountamount_base",
  DiscountPercentage = "discountpercentage",
  EffectiveFrom = "effectivefrom",
  EffectiveTo = "effectiveto",
  EmailAddress = "emailaddress",
  ExchangeRate = "exchangerate",
  ExpiresOn = "expireson",
  FreightAmount = "freightamount",
  FreightAmount_Base = "freightamount_base",
  FreightTermsCode = "freighttermscode",
  ImportSequenceNumber = "importsequencenumber",
  LastOnHoldTime = "lastonholdtime",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_Account = "msdyn_account",
  msdyn_AccountManagerId = "msdyn_accountmanagerid",
  msdyn_AccountManagerIdName = "msdyn_accountmanageridname",
  msdyn_AccountManagerIdYomiName = "msdyn_accountmanageridyominame",
  msdyn_AccountName = "msdyn_accountname",
  msdyn_AccountYomiName = "msdyn_accountyominame",
  msdyn_AdjustedGrossMargin = "msdyn_adjustedgrossmargin",
  msdyn_Competitive = "msdyn_competitive",
  msdyn_ContractOrganizationalUnitId = "msdyn_contractorganizationalunitid",
  msdyn_ContractOrganizationalUnitIdName = "msdyn_contractorganizationalunitidname",
  msdyn_CustomerBudgetRollUp = "msdyn_customerbudgetrollup",
  msdyn_customerbudgetrollup_Base = "msdyn_customerbudgetrollup_base",
  msdyn_CustomerBudgetRollUp_Date = "msdyn_customerbudgetrollup_date",
  msdyn_CustomerBudgetRollUp_State = "msdyn_customerbudgetrollup_state",
  msdyn_EstimatedBudget = "msdyn_estimatedbudget",
  msdyn_EstimatedCompletionRollUp = "msdyn_estimatedcompletionrollup",
  msdyn_EstimatedCompletionRollUp_Date = "msdyn_estimatedcompletionrollup_date",
  msdyn_EstimatedCompletionRollUp_State = "msdyn_estimatedcompletionrollup_state",
  msdyn_EstimatedCost = "msdyn_estimatedcost",
  msdyn_estimatedcost_Base = "msdyn_estimatedcost_base",
  msdyn_EstimatedQuoteMargin = "msdyn_estimatedquotemargin",
  msdyn_EstimatedSchedule = "msdyn_estimatedschedule",
  msdyn_feasible = "msdyn_feasible",
  msdyn_GrossMargin = "msdyn_grossmargin",
  msdyn_InvoiceSetupTotals = "msdyn_invoicesetuptotals",
  msdyn_invoicesetuptotals_Base = "msdyn_invoicesetuptotals_base",
  msdyn_OrderType = "msdyn_ordertype",
  msdyn_Profitability = "msdyn_profitability",
  msdyn_QuoteLineEndDate = "msdyn_quotelineenddate",
  msdyn_QuoteLineStartDate = "msdyn_quotelinestartdate",
  msdyn_TotalAmount = "msdyn_totalamount",
  msdyn_totalamount_Base = "msdyn_totalamount_base",
  msdyn_TotalChargeableCostRollup = "msdyn_totalchargeablecostrollup",
  msdyn_totalchargeablecostrollup_Base = "msdyn_totalchargeablecostrollup_base",
  msdyn_TotalChargeableCostRollup_Date = "msdyn_totalchargeablecostrollup_date",
  msdyn_TotalChargeableCostRollup_State = "msdyn_totalchargeablecostrollup_state",
  msdyn_TotalNonchargeableCostRollup = "msdyn_totalnonchargeablecostrollup",
  msdyn_totalnonchargeablecostrollup_Base = "msdyn_totalnonchargeablecostrollup_base",
  msdyn_TotalNonchargeableCostRollup_Date = "msdyn_totalnonchargeablecostrollup_date",
  msdyn_TotalNonchargeableCostRollup_State = "msdyn_totalnonchargeablecostrollup_state",
  Name = "name",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityIdName = "opportunityidname",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PaymentTermsCode = "paymenttermscode",
  PriceLevelId = "pricelevelid",
  PriceLevelIdName = "pricelevelidname",
  PricingErrorCode = "pricingerrorcode",
  ProcessId = "processid",
  QuoteCreationMethod = "quotecreationmethod",
  QuoteId = "quoteid",
  QuoteNumber = "quotenumber",
  RequestDeliveryBy = "requestdeliveryby",
  RevisionNumber = "revisionnumber",
  ShippingMethodCode = "shippingmethodcode",
  ShipTo_AddressId = "shipto_addressid",
  ShipTo_City = "shipto_city",
  ShipTo_Composite = "shipto_composite",
  ShipTo_ContactName = "shipto_contactname",
  ShipTo_Country = "shipto_country",
  ShipTo_Fax = "shipto_fax",
  ShipTo_FreightTermsCode = "shipto_freighttermscode",
  ShipTo_Line1 = "shipto_line1",
  ShipTo_Line2 = "shipto_line2",
  ShipTo_Line3 = "shipto_line3",
  ShipTo_Name = "shipto_name",
  ShipTo_PostalCode = "shipto_postalcode",
  ShipTo_StateOrProvince = "shipto_stateorprovince",
  ShipTo_Telephone = "shipto_telephone",
  SkipPriceCalculation = "skippricecalculation",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TotalAmount = "totalamount",
  TotalAmount_Base = "totalamount_base",
  TotalAmountLessFreight = "totalamountlessfreight",
  TotalAmountLessFreight_Base = "totalamountlessfreight_base",
  TotalDiscountAmount = "totaldiscountamount",
  TotalDiscountAmount_Base = "totaldiscountamount_base",
  TotalLineItemAmount = "totallineitemamount",
  TotalLineItemAmount_Base = "totallineitemamount_base",
  TotalLineItemDiscountAmount = "totallineitemdiscountamount",
  TotalLineItemDiscountAmount_Base = "totallineitemdiscountamount_base",
  TotalTax = "totaltax",
  TotalTax_Base = "totaltax_base",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UniqueDscId = "uniquedscid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WillCall = "willcall",
  z2t_AccountNumber = "z2t_accountnumber",
  z2t_customeraccount = "z2t_customeraccount",
  z2t_customeraccountName = "z2t_customeraccountname",
  z2t_customeraccountYomiName = "z2t_customeraccountyominame",
  z2t_customerequipmentnumber = "z2t_customerequipmentnumber",
  z2t_customername = "z2t_customername",
  z2t_customerpo = "z2t_customerpo",
  z2t_Division = "z2t_division",
  z2t_DivisionName = "z2t_divisionname",
  z2t_equipment = "z2t_equipment",
  z2t_equipmentName = "z2t_equipmentname",
  z2t_expirationdate = "z2t_expirationdate",
  z2t_followupdate = "z2t_followupdate",
  z2t_invoiceaccount = "z2t_invoiceaccount",
  z2t_invoiceaccountName = "z2t_invoiceaccountname",
  z2t_invoiceaccountYomiName = "z2t_invoiceaccountyominame",
  z2t_Make = "z2t_make",
  z2t_MakeName = "z2t_makename",
  z2t_Model = "z2t_model",
  z2t_ModelName = "z2t_modelname",
  z2t_opportunityid = "z2t_opportunityid",
  z2t_opportunityidName = "z2t_opportunityidname",
  z2t_orderclass = "z2t_orderclass",
  z2t_Project = "z2t_project",
  z2t_ProjectName = "z2t_projectname",
  z2t_promisedate = "z2t_promisedate",
  z2t_prospect = "z2t_prospect",
  z2t_prospectName = "z2t_prospectname",
  z2t_prospectYomiName = "z2t_prospectyominame",
  z2t_quotationtype = "z2t_quotationtype",
  z2t_salesmanname = "z2t_salesmanname",
  z2t_salesresponsible = "z2t_salesresponsible",
  z2t_salesresponsibleName = "z2t_salesresponsiblename",
  z2t_serialnumber = "z2t_serialnumber",
  z2t_SubTtlAmtLessDisc = "z2t_subttlamtlessdisc",
  z2t_subttlamtlessdisc_Base = "z2t_subttlamtlessdisc_base",
}

// Early Bound Interface
export interface Quote extends IEntity {
  // Account LookupType Unique identifier of the account with which the quote is associated.
  accountid?: import("cdsify").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  accountidyominame?: string | null;
  // Canvas App ID StringType
  axa_canvasappid?: string | null;
  // Print Type quote_axa_quote_axa_printtype
  axa_printtype?: import("../enums/quote_axa_quote_axa_printtype").quote_axa_quote_axa_printtype | null;
  // Quote LookupType Unique identifier for Opportunity associated with Quote.
  axa_quoteid?: import("cdsify").EntityReference | null;
  //  StringType
  axa_quoteidname?: string | null;
  // Send an email BooleanType
  axa_sendanemail?: boolean | null;
  // Version Number StringType
  axa_versionnumber?: string | null;
  // Bill To Address ID UniqueidentifierType Unique identifier of the billing address.
  billto_addressid?: import("cdsify").Guid | null;
  // Bill To City StringType Type the city for the customer's billing address.
  billto_city?: string | null;
  // Bill To Address MemoType Shows the complete Bill To address.
  billto_composite?: string | null;
  // Bill To Contact Name StringType Type the primary contact name at the customer's billing address.
  billto_contactname?: string | null;
  // Bill To Country/Region StringType Type the country or region for the customer's billing address.
  billto_country?: string | null;
  // Bill To Fax StringType Type the fax number for the customer's billing address.
  billto_fax?: string | null;
  // Bill To Street 1 StringType Type the first line of the customer's billing address.
  billto_line1?: string | null;
  // Bill To Street 2 StringType Type the second line of the customer's billing address.
  billto_line2?: string | null;
  // Bill To Street 3 StringType Type the third line of the billing address.
  billto_line3?: string | null;
  // Bill To Name StringType Type a name for the customer's billing address, such as "Headquarters" or "Field office", to identify the address.
  billto_name?: string | null;
  // Bill To ZIP/Postal Code StringType Type the ZIP Code or postal code for the billing address.
  billto_postalcode?: string | null;
  // Bill To State/Province StringType Type the state or province for the billing address.
  billto_stateorprovince?: string | null;
  // Bill To Phone StringType Type the phone number for the customer's billing address.
  billto_telephone?: string | null;
  // Source Campaign LookupType Shows the campaign that the order was created from.
  campaignid?: import("cdsify").EntityReference | null;
  //  StringType
  campaignidname?: string | null;
  // Closed On DateTimeType Enter the date when the quote was closed to indicate the expiration, revision, or cancellation date. DateOnly:DateOnly
  closedon?: Date | null;
  // Contact LookupType Unique identifier of the contact associated with the quote.
  contactid?: import("cdsify").EntityReference | null;
  //  StringType
  contactidname?: string | null;
  //  StringType
  contactidyominame?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Abnormal Call BooleanType
  crf08_abnormalcall?: boolean | null;
  // Address StringType
  crf08_address?: string | null;
  // CAT Insurance Premium StringType
  crf08_catinsurancepremium?: string | null;
  // CAT Support StringType
  crf08_catsupport?: string | null;
  // Contact StringType
  crf08_contact?: string | null;
  // Cover letter (Preview) StringType
  crf08_coverletter?: string | null;
  // Customer References StringType
  crf08_customerreferences?: string | null;
  // Customer Requistion StringType
  crf08_customerrequistion?: string | null;
  // CVA detail StringType
  crf08_cvadetail?: string | null;
  // Delivery Reason StringType
  crf08_deliveryreason?: string | null;
  // html MemoType HTML code for pdf printing
  crf08_html?: string | null;
  // Intro Message (Edit) StringType
  crf08_intromessageedit?: string | null;
  // Mode Of Delivery StringType
  crf08_modeofdelivery?: string | null;
  // Need by date DateTimeType DateOnly:UserLocal
  crf08_needbydate?: Date | null;
  // Note StringType
  crf08_note?: string | null;
  // Quotation Status crf08_quotationstatus
  crf08_quotationstatus?: import("../enums/crf08_quotationstatus").crf08_quotationstatus | null;
  // Requested Receipt Date DateTimeType DateOnly:UserLocal
  crf08_requestedreceiptdate?: Date | null;
  // Requested Ship Date DateTimeType DateOnly:UserLocal
  crf08_requestedshipdate?: Date | null;
  // Sales Manager StringType
  crf08_salesmanager?: string | null;
  // Salesperson StringType
  crf08_salesperson?: string | null;
  // Sales Person Email StringType
  crf08_salespersonemail?: string | null;
  // Sales Person Phone StringType
  crf08_salespersonphone?: string | null;
  // Sales Pool StringType
  crf08_salespool?: string | null;
  // Segment Service LookupType
  crf08_segmentservice?: import("cdsify").EntityReference | null;
  //  StringType
  crf08_segmentservicename?: string | null;
  // Service Call LookupType
  crf08_servicecall?: import("cdsify").EntityReference | null;
  //  StringType
  crf08_servicecallname?: string | null;
  // Telephone StringType
  crf08_telephone?: string | null;
  // Valid Until DateTimeType DateOnly:UserLocal
  crf08_validuntil?: Date | null;
  // Warehouse StringType
  crf08_warehouse?: string | null;
  // Potential Customer [Required] CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities.
  customerid?: import("cdsify").EntityReference;
  //  [Required] StringType
  customeridname?: string;
  // Potential Customer Type [Required] EntityNameType
  customeridtype?: string;
  //  [Required] StringType
  customeridyominame?: string;
  // Description MemoType Type additional information to describe the quote, such as the products or services offered or details about the customer's product preferences.
  description?: string | null;
  // Quote Discount Amount MoneyType Type the discount amount for the quote if the customer is eligible for special savings.
  discountamount?: number | null;
  // Quote Discount Amount (Base) MoneyType Value of the Quote Discount Amount in base currency.
  discountamount_base?: number | null;
  // Quote Discount (%) DecimalType Type the discount rate that should be applied to the Detail Amount field to include additional savings for the customer in the quote.
  discountpercentage?: number | null;
  // Effective from DateTimeType Enter the date when the quote pricing is effective or was first communicated to the customer. DateOnly:UserLocal
  effectivefrom?: Date | null;
  // Effective to DateTimeType Enter the expiration date or last day the quote pricing is effective for the customer. DateOnly:UserLocal
  effectiveto?: Date | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Due By DateTimeType Enter the date a decision or order is due from the customer to indicate the expiration date of the quote. DateOnly:DateOnly
  expireson?: Date | null;
  // Freight Amount MoneyType Type the cost of freight or shipping for the products included in the quote for use in calculating the Total Amount field.
  freightamount?: number | null;
  // Freight Amount (Base) MoneyType Value of the Freight Amount in base currency.
  freightamount_base?: number | null;
  // Freight Terms quote_quote_freighttermscode Select the freight terms to make sure shipping charges are processed correctly.
  freighttermscode?: import("../enums/quote_quote_freighttermscode").quote_quote_freighttermscode | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // zzPotential Customer LookupType Customer Account associated with this Quote
  msdyn_account?: import("cdsify").EntityReference | null;
  // Account Manager LookupType Account manager responsible for the quote.
  msdyn_accountmanagerid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_accountmanageridname?: string | null;
  //  StringType
  msdyn_accountmanageridyominame?: string | null;
  //  StringType
  msdyn_accountname?: string | null;
  //  StringType
  msdyn_accountyominame?: string | null;
  // Adjusted Gross Margin (%) DecimalType Shows the estimated gross margin after accounting for non-chargeable components.
  msdyn_adjustedgrossmargin?: number | null;
  // Competitive msdyn_competitive Shows how the quote estimation of sales value and schedule compare to customer expectations on those parameters. Possible values are 1: Within Customer expectations, 2: Not Within Customer expectations, and 0: Customer expectations Not Available.
  msdyn_competitive?: import("../enums/msdyn_competitive").msdyn_competitive | null;
  // Contracting Unit LookupType The organizational unit in charge of the contract.
  msdyn_contractorganizationalunitid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_contractorganizationalunitidname?: string | null;
  // Customer Budget MoneyType Shows the total customer budget for the quote, computed from all the quote lines.
  msdyn_customerbudgetrollup?: number | null;
  // Customer Budget (Base) MoneyType Shows the value of the customer budget in the base currency.
  msdyn_customerbudgetrollup_base?: number | null;
  // Customer Budget (Last Updated On) DateTimeType Last Updated time of rollup field Customer Budget. DateAndTime:UserLocal
  msdyn_customerbudgetrollup_date?: Date | null;
  // Customer Budget (State) IntegerType State of rollup field Customer Budget.
  msdyn_customerbudgetrollup_state?: number | null;
  // Estimated Budget msdyn_budgetestimate Shows how the estimated sales value on the quote compares to customer budgets. Possible values are 1: Within Customer Budget, 2: Exceeds Customer Budget, 0: Budget Estimate Not Available
  msdyn_estimatedbudget?: import("../enums/msdyn_budgetestimate").msdyn_budgetestimate | null;
  // Estimated Completion DateTimeType Estimated completion date, computed from the details of each quote line. DateOnly:UserLocal
  msdyn_estimatedcompletionrollup?: Date | null;
  // Estimated Completion (Last Updated On) DateTimeType Last Updated time of rollup field Estimated Completion. DateAndTime:UserLocal
  msdyn_estimatedcompletionrollup_date?: Date | null;
  // Estimated Completion (State) IntegerType State of rollup field Estimated Completion.
  msdyn_estimatedcompletionrollup_state?: number | null;
  // Estimated Cost MoneyType The estimated cost of this quote
  msdyn_estimatedcost?: number | null;
  // Estimated Cost (Base) MoneyType Value of the Estimated Cost in base currency.
  msdyn_estimatedcost_base?: number | null;
  // Estimated Margin DecimalType Estimated Margin of this quote
  msdyn_estimatedquotemargin?: number | null;
  // Estimated Schedule msdyn_schedule Shows how the estimated schedule on the quote compares to customer expectations. Possible values are 1: Estimated To Finish Early, 2: Estimated To Finish Late, 3: Estimated To Finish On Schedule, and 0: Schedule Not Available.
  msdyn_estimatedschedule?: import("../enums/msdyn_schedule").msdyn_schedule | null;
  // Feasibility msdyn_feasibility Shows how the quote estimation compares to project estimation. Possible values are 0: Feasibility Not Available, 1: Feasible, and 2: Not Feasible.
  msdyn_feasible?: import("../enums/msdyn_feasibility").msdyn_feasibility | null;
  // Gross Margin (%) DecimalType Shows the estimated gross margin without accounting for non-chargeable components.
  msdyn_grossmargin?: number | null;
  // Invoice Setup Totals MoneyType The totals of all assigned Invoice Setups
  msdyn_invoicesetuptotals?: number | null;
  // Invoice Setup Totals (Base) MoneyType Value of the Invoice Setup Totals in base currency.
  msdyn_invoicesetuptotals_base?: number | null;
  // Order Type quote_msdyn_quote_msdyn_ordertype Internal use only.
  msdyn_ordertype?: import("../enums/quote_msdyn_quote_msdyn_ordertype").quote_msdyn_quote_msdyn_ordertype | null;
  // Profitability msdyn_profitability Shows the estimated profitability of the quote. Possible values are Profitable, Not Profitable, and Profitability not available.
  msdyn_profitability?: import("../enums/msdyn_profitability").msdyn_profitability | null;
  // Latest Quote Line End Date DateTimeType The latest end date of all associated quote lines DateOnly:UserLocal
  msdyn_quotelineenddate?: Date | null;
  // Earliest Quote Line Start Date DateTimeType The earliest Start Date of all Quote Lines that are associated to this quote DateOnly:UserLocal
  msdyn_quotelinestartdate?: Date | null;
  // TotalAmount MoneyType
  msdyn_totalamount?: number | null;
  // TotalAmount (Base) MoneyType Value of the TotalAmount in base currency.
  msdyn_totalamount_base?: number | null;
  // Total Chargeable Cost MoneyType
  msdyn_totalchargeablecostrollup?: number | null;
  // Total Chargeable Cost (Base) MoneyType Value of the Total Chargeable Cost in base currency.
  msdyn_totalchargeablecostrollup_base?: number | null;
  // Total Chargeable Cost (Last Updated On) DateTimeType Last Updated time of rollup field Total Chargeable Cost. DateAndTime:UserLocal
  msdyn_totalchargeablecostrollup_date?: Date | null;
  // Total Chargeable Cost (State) IntegerType State of rollup field Total Chargeable Cost.
  msdyn_totalchargeablecostrollup_state?: number | null;
  // Total Non-chargeable Cost MoneyType
  msdyn_totalnonchargeablecostrollup?: number | null;
  // Total Non-chargeable Cost (Base) MoneyType Value of the Total Non-chargeable Cost in base currency.
  msdyn_totalnonchargeablecostrollup_base?: number | null;
  // Total Non-chargeable Cost (Last Updated On) DateTimeType Last Updated time of rollup field Total Non-chargeable Cost. DateAndTime:UserLocal
  msdyn_totalnonchargeablecostrollup_date?: Date | null;
  // Total Non-chargeable Cost (State) IntegerType State of rollup field Total Non-chargeable Cost.
  msdyn_totalnonchargeablecostrollup_state?: number | null;
  // Name [Required] StringType Type a descriptive name for the quote.
  name?: string;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the quote was on hold.
  onholdtime?: number | null;
  // Opportunity LookupType Choose the opportunity that the quote is related to for reporting and analytics.
  opportunityid?: import("cdsify").EntityReference | null;
  //  StringType
  opportunityidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("cdsify").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("cdsify").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("cdsify").EntityReference | null;
  // Payment Terms quote_quote_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/quote_quote_paymenttermscode").quote_quote_paymenttermscode | null;
  // Price List LookupType Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
  pricelevelid?: import("cdsify").EntityReference | null;
  //  StringType
  pricelevelidname?: string | null;
  // Pricing Error  qooi_pricingerrorcode Pricing error for the quote.
  pricingerrorcode?: import("../enums/qooi_pricingerrorcode").qooi_pricingerrorcode | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("cdsify").Guid | null;
  // Creation Method quotecreationmethod
  quotecreationmethod?: import("../enums/quotecreationmethod").quotecreationmethod | null;
  // Quote UniqueidentifierType Unique identifier of the quote.
  quoteid?: import("cdsify").Guid | null;
  // Quote ID StringType Shows the quote number for customer reference and searching capabilities. The number cannot be modified.
  quotenumber?: string | null;
  // Requested Delivery Date DateTimeType Enter the delivery date requested by the customer for all products in the quote. DateOnly:UserLocal
  requestdeliveryby?: Date | null;
  // Revision ID IntegerType Shows the version number of the quote for revision history tracking.
  revisionnumber?: number | null;
  // Shipping Method quote_quote_shippingmethodcode Select a shipping method for deliveries sent to this address.
  shippingmethodcode?: import("../enums/quote_quote_shippingmethodcode").quote_quote_shippingmethodcode | null;
  // Ship To Address ID UniqueidentifierType Unique identifier of the shipping address.
  shipto_addressid?: import("cdsify").Guid | null;
  // Ship To City StringType Type the city for the customer's shipping address.
  shipto_city?: string | null;
  // Ship To Address MemoType Shows the complete Ship To address.
  shipto_composite?: string | null;
  // Ship To Contact Name StringType Type the primary contact name at the customer's shipping address.
  shipto_contactname?: string | null;
  // Ship To Country/Region StringType Type the country or region for the customer's shipping address.
  shipto_country?: string | null;
  // Ship To Fax StringType Type the fax number for the customer's shipping address.
  shipto_fax?: string | null;
  // Ship To Freight Terms quote_quote_shipto_freighttermscode Select the freight terms to make sure shipping orders are processed correctly.
  shipto_freighttermscode?: import("../enums/quote_quote_shipto_freighttermscode").quote_quote_shipto_freighttermscode | null;
  // Ship To Street 1 StringType Type the first line of the customer's shipping address.
  shipto_line1?: string | null;
  // Ship To Street 2 StringType Type the second line of the customer's shipping address.
  shipto_line2?: string | null;
  // Ship To Street 3 StringType Type the third line of the shipping address.
  shipto_line3?: string | null;
  // Ship To Name StringType Type a name for the customer's shipping address, such as "Headquarters" or "Field office",  to identify the address.
  shipto_name?: string | null;
  // Ship To ZIP/Postal Code StringType Type the ZIP Code or postal code for the shipping address.
  shipto_postalcode?: string | null;
  // Ship To State/Province StringType Type the state or province for the shipping address.
  shipto_stateorprovince?: string | null;
  // Ship To Phone StringType Type the phone number for the customer's shipping address.
  shipto_telephone?: string | null;
  // Skip Price Calculation qooi_skippricecalculation Skip Price Calculation (For Internal use)
  skippricecalculation?: import("../enums/qooi_skippricecalculation").qooi_skippricecalculation | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the quote record.
  slaid?: import("cdsify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this quote. This field is for internal use only.
  slainvokedid?: import("cdsify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("cdsify").Guid | null;
  // Status quote_quote_statecode Shows whether the quote is draft, active, won, or closed. Only draft quotes can be edited.
  statecode?: import("../enums/quote_quote_statecode").quote_quote_statecode | null;
  // Status Reason quote_quote_statuscode Select the quote's status.
  statuscode?: import("../enums/quote_quote_statuscode").quote_quote_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Total Amount MoneyType Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the quote.
  totalamount?: number | null;
  // Total Amount (Base) MoneyType Value of the Total Amount in base currency.
  totalamount_base?: number | null;
  // Total Pre-Freight Amount MoneyType Shows the total product amount for the quote, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount due for the quote.
  totalamountlessfreight?: number | null;
  // Total Pre-Freight Amount (Base) MoneyType Value of the Total Pre-Freight Amount in base currency.
  totalamountlessfreight_base?: number | null;
  // Total Discount Amount MoneyType Shows the total discount amount, based on the discount price and rate entered on the quote.
  totaldiscountamount?: number | null;
  // Total Discount Amount (Base) MoneyType Value of the Total Discount Amount in base currency.
  totaldiscountamount_base?: number | null;
  // Total Detail Amount MoneyType Shows the sum of all existing and write-in products included on the quote, based on the specified price list and quantities.
  totallineitemamount?: number | null;
  // Total Detail Amount (Base) MoneyType Value of the Total Detail Amount in base currency.
  totallineitemamount_base?: number | null;
  // Total Line Item Discount Amount MoneyType Shows the total of the Manual Discount amounts specified on all products included in the quote. This value is reflected in the Detail Amount field on the quote and is added to any discount amount or rate specified on the quote
  totallineitemdiscountamount?: number | null;
  // Total Line Item Discount Amount (Base) MoneyType Value of the Total Line Item Discount Amount in base currency.
  totallineitemdiscountamount_base?: number | null;
  // Total Tax MoneyType Shows the total of the Tax amounts specified on all products included in the quote, included in the Total Amount due calculation for the quote.
  totaltax?: number | null;
  // Total Tax (Base) MoneyType Value of the Total Tax in base currency.
  totaltax_base?: number | null;
  // Currency [Required] LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("cdsify").EntityReference;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // Unique Dsc ID UniqueidentifierType For internal use only.
  uniquedscid?: import("cdsify").Guid | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Ship To BooleanType Select whether the products included in the quote should be shipped to the specified address or held until the customer calls with further pick up or delivery instructions.
  willcall?: boolean | null;
  // Account Number StringType
  z2t_accountnumber?: string | null;
  // Customer Account LookupType Customer Account
  z2t_customeraccount?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_customeraccountname?: string | null;
  //  StringType
  z2t_customeraccountyominame?: string | null;
  // Customer Equipment Number StringType
  z2t_customerequipmentnumber?: string | null;
  // Customer Name StringType
  z2t_customername?: string | null;
  // Customer Po StringType
  z2t_customerpo?: string | null;
  // Division LookupType
  z2t_division?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_divisionname?: string | null;
  // Equipment LookupType Equipment
  z2t_equipment?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_equipmentname?: string | null;
  // Expiration Date DateTimeType DateOnly:UserLocal
  z2t_expirationdate?: Date | null;
  // Follow Up Date DateTimeType DateOnly:UserLocal
  z2t_followupdate?: Date | null;
  // Invoice Account LookupType Invoice Account
  z2t_invoiceaccount?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_invoiceaccountname?: string | null;
  //  StringType
  z2t_invoiceaccountyominame?: string | null;
  // Make LookupType
  z2t_make?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_makename?: string | null;
  // Model LookupType
  z2t_model?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_modelname?: string | null;
  // Opportunity ID LookupType Opportunity
  z2t_opportunityid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_opportunityidname?: string | null;
  // Order Class StringType
  z2t_orderclass?: string | null;
  // Project LookupType
  z2t_project?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_projectname?: string | null;
  // Promise Date DateTimeType DateOnly:UserLocal
  z2t_promisedate?: Date | null;
  // Prospect LookupType Prospect
  z2t_prospect?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_prospectname?: string | null;
  //  StringType
  z2t_prospectyominame?: string | null;
  // Quotation Type quote_z2t_quotationtype
  z2t_quotationtype?: import("../enums/quote_z2t_quotationtype").quote_z2t_quotationtype | null;
  // Salesman Name StringType
  z2t_salesmanname?: string | null;
  // Sales Responsible LookupType Sales Responsible
  z2t_salesresponsible?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_salesresponsiblename?: string | null;
  // Serial Number StringType
  z2t_serialnumber?: string | null;
  // Sub Ttl Amt Less Disc MoneyType
  z2t_subttlamtlessdisc?: number | null;
  // Sub Ttl Amt Less Disc (Base) MoneyType Value of the Sub Ttl Amt Less Disc in base currency.
  z2t_subttlamtlessdisc_base?: number | null;
}
