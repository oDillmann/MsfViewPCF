/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity Opportunity
export const opportunityMetadata = {
  typeName: "mscrm.opportunity",
  logicalName: "opportunity",
  collectionName: "opportunities",
  primaryIdAttribute: "opportunityid",
  attributeTypes: {
    // Numeric Types
    actualvalue: "Money",
    actualvalue_base: "Money",
    axa_competitor1machinequantity: "Integer",
    budgetamount: "Money",
    budgetamount_base: "Money",
    closeprobability: "Integer",
    discountamount: "Money",
    discountamount_base: "Money",
    discountpercentage: "Decimal",
    estimatedvalue: "Money",
    estimatedvalue_base: "Money",
    exchangerate: "Decimal",
    freightamount: "Money",
    freightamount_base: "Money",
    importsequencenumber: "Integer",
    msdyn_opportunityscore: "Integer",
    nmc_competitorprice: "Money",
    nmc_competitorprice_base: "Money",
    nmc_daysopen: "Integer",
    nmc_daysopencalculated: "Integer",
    nmc_estimatedlaborhours: "Integer",
    onholdtime: "Integer",
    teamsfollowed: "Integer",
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
    z2t_daysopen: "Integer",
    // Optionsets
    budgetstatus: "Optionset",
    initialcommunication: "Optionset",
    msdyn_forecastcategory: "Optionset",
    msdyn_opportunitygrade: "Optionset",
    msdyn_opportunityscoretrend: "Optionset",
    msdyn_ordertype: "Optionset",
    need: "Optionset",
    new_opportunitytype: "Optionset",
    nmc_assisttype: "Optionset",
    nmc_engineeringtype: "Optionset",
    nmc_fundingtype: "Optionset",
    nmc_locateequipment: "Optionset",
    nmc_orderclass: "Optionset",
    nmc_projectgroup: "Optionset",
    nmc_projecttype: "Optionset",
    nmc_purchaserentorrpo: "Optionset",
    nmc_salespersontype: "Optionset",
    nmc_salesstages: "Optionset",
    nmc_typeofopportunity: "Optionset",
    opportunityratingcode: "Optionset",
    pricingerrorcode: "Optionset",
    prioritycode: "Optionset",
    purchaseprocess: "Optionset",
    purchasetimeframe: "Optionset",
    salesstage: "Optionset",
    salesstagecode: "Optionset",
    skippricecalculation: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    timeline: "Optionset",
    z2t_completefinalproposal: "Optionset",
    z2t_completeinternalreview: "Optionset",
    z2t_developproposal: "Optionset",
    z2t_extendedwarrantyincluded: "Optionset",
    z2t_fueltype: "Optionset",
    z2t_identifystakeholders: "Optionset",
    z2t_kwrange: "Optionset",
    z2t_opportunityphase: "Optionset",
    z2t_optype: "Optionset",
    z2t_presentfinalproposal: "Optionset",
    z2t_presentproposal: "Optionset",
    z2t_probability: "Optionset",
    z2t_prognosis: "Optionset",
    z2t_sendthankyou: "Optionset",
    z2t_servicequoteapprovalstatus: "Optionset",
    z2t_servicequoteformat: "Optionset",
    z2t_servicequotestatus: "Optionset",
    z2t_store: "Optionset",
    // Date Formats
    actualclosedate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    estimatedclosedate: "DateOnly:DateOnly",
    finaldecisiondate: "DateOnly:DateOnly",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    new_lastupdateowner: "DateOnly:UserLocal",
    nmc_biddate: "DateOnly:DateOnly",
    nmc_deliverydate: "DateOnly:DateOnly",
    nmc_expectedrevenuedate: "DateOnly:DateOnly",
    nmc_forecastclosedate: "DateOnly:UserLocal",
    nmc_forecastcloseddate: "DateOnly:DateOnly",
    overriddencreatedon: "DateOnly:UserLocal",
    schedulefollowup_prospect: "DateOnly:UserLocal",
    schedulefollowup_qualify: "DateOnly:UserLocal",
    scheduleproposalmeeting: "DateOnly:UserLocal",
    z2t_dateclosed: "DateOnly:UserLocal",
    z2t_quoteduedate: "DateOnly:UserLocal",
    z2t_rentalenddate: "DateOnly:UserLocal",
    z2t_rentalstartdate: "DateOnly:UserLocal",
  },
  navigation: {
    z2t_SourceTypeID: ["mscrm.z2t_sourcetype"],
    z2t_SourceID: ["mscrm.z2t_sourceid"],
    z2t_Project: ["mscrm.z2t_project"],
    z2t_ProductFamily: ["mscrm.z2t_productfamily"],
    z2t_OpenedBy: ["mscrm.systemuser"],
    z2t_Model: ["mscrm.z2t_model"],
    z2t_Make: ["mscrm.z2t_make"],
    z2t_JobSiteId: ["mscrm.z2t_jobsite"],
    z2t_GeneralContractor: ["mscrm.account"],
    z2t_Equipment: ["mscrm.z2t_equipment"],
    z2t_Engineer: ["mscrm.account"],
    z2t_EndUser: ["mscrm.account"],
    z2t_Division: ["mscrm.z2t_division"],
    z2t_CompatibilityCode: ["mscrm.z2t_compatibilitycode"],
    z2t_CRMQuotedBy: ["mscrm.systemuser"],
    z2t_AccountPlanId: ["mscrm.new_accountplan"],
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid_processstage: ["mscrm.processstage"],
    sla_opportunity_sla: ["mscrm.sla"],
    pricelevelid: ["mscrm.pricelevel"],
    parentcontactid: ["mscrm.contact"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    nmc_ServiceCall1: ["mscrm.incident"],
    nmc_SalesOrder: ["mscrm.salesorder"],
    nmc_SICCode: ["mscrm.z2t_sic"],
    nmc_RequestingBusinessUnit: ["mscrm.businessunit"],
    nmc_RentalOrder: ["mscrm.nmc_rentalcontract"],
    nmc_OriginatingCallReport: ["mscrm.new_callreport"],
    nmc_InsideSalesRep: ["mscrm.systemuser"],
    nmc_FundingSource: ["mscrm.account"],
    nmc_CustomerProspect: ["mscrm.account"],
    nmc_ClosedBy: ["mscrm.systemuser"],
    nmc_CeresModel: ["mscrm.z2t_model"],
    nmc_CeresMake: ["mscrm.z2t_make"],
    nmc_CIC: ["mscrm.account"],
    nmc_CATPWC: ["mscrm.account"],
    nmc_AssistSalesRep: ["mscrm.z2t_salesperson"],
    msdyn_workordertype: ["mscrm.msdyn_workordertype"],
    msdyn_segmentid: ["mscrm.msdyn_segment"],
    msdyn_opportunitykpiid: ["mscrm.msdyn_opportunitykpiitem"],
    msdyn_PredictiveScoreId: ["mscrm.msdyn_predictivescore"],
    msdyn_ContractOrganizationalUnitId: ["mscrm.msdyn_organizationalunit"],
    msdyn_AccountManagerId: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    campaignid: ["mscrm.campaign"],
    customerid: ["account","contact"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum OpportunityAttributes {
  AccountId = "accountid",
  AccountIdName = "accountidname",
  AccountIdYomiName = "accountidyominame",
  ActualCloseDate = "actualclosedate",
  ActualValue = "actualvalue",
  ActualValue_Base = "actualvalue_base",
  axa_Competitor1MachineQuantity = "axa_competitor1machinequantity",
  axa_SerialNumber = "axa_serialnumber",
  BudgetAmount = "budgetamount",
  BudgetAmount_Base = "budgetamount_base",
  BudgetStatus = "budgetstatus",
  CampaignId = "campaignid",
  CampaignIdName = "campaignidname",
  CaptureProposalFeedback = "captureproposalfeedback",
  CloseProbability = "closeprobability",
  CompleteFinalProposal = "completefinalproposal",
  CompleteInternalReview = "completeinternalreview",
  ConfirmInterest = "confirminterest",
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
  CurrentSituation = "currentsituation",
  CustomerId = "customerid",
  CustomerIdName = "customeridname",
  CustomerIdType = "customeridtype",
  CustomerIdYomiName = "customeridyominame",
  CustomerNeed = "customerneed",
  CustomerPainPoints = "customerpainpoints",
  DecisionMaker = "decisionmaker",
  Description = "description",
  DevelopProposal = "developproposal",
  DiscountAmount = "discountamount",
  DiscountAmount_Base = "discountamount_base",
  DiscountPercentage = "discountpercentage",
  EmailAddress = "emailaddress",
  EstimatedCloseDate = "estimatedclosedate",
  EstimatedValue = "estimatedvalue",
  EstimatedValue_Base = "estimatedvalue_base",
  EvaluateFit = "evaluatefit",
  ExchangeRate = "exchangerate",
  FileDebrief = "filedebrief",
  FinalDecisionDate = "finaldecisiondate",
  FreightAmount = "freightamount",
  FreightAmount_Base = "freightamount_base",
  IdentifyCompetitors = "identifycompetitors",
  IdentifyCustomerContacts = "identifycustomercontacts",
  IdentifyPursuitTeam = "identifypursuitteam",
  ImportSequenceNumber = "importsequencenumber",
  InitialCommunication = "initialcommunication",
  IsPrivate = "isprivate",
  IsRevenueSystemCalculated = "isrevenuesystemcalculated",
  LastOnHoldTime = "lastonholdtime",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_AccountManagerId = "msdyn_accountmanagerid",
  msdyn_AccountManagerIdName = "msdyn_accountmanageridname",
  msdyn_AccountManagerIdYomiName = "msdyn_accountmanageridyominame",
  msdyn_ContractOrganizationalUnitId = "msdyn_contractorganizationalunitid",
  msdyn_ContractOrganizationalUnitIdName = "msdyn_contractorganizationalunitidname",
  msdyn_forecastcategory = "msdyn_forecastcategory",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_OpportunityGrade = "msdyn_opportunitygrade",
  msdyn_opportunitykpiid = "msdyn_opportunitykpiid",
  msdyn_opportunitykpiidName = "msdyn_opportunitykpiidname",
  msdyn_OpportunityScore = "msdyn_opportunityscore",
  msdyn_OpportunityScoreTrend = "msdyn_opportunityscoretrend",
  msdyn_OrderType = "msdyn_ordertype",
  msdyn_PredictiveScoreId = "msdyn_predictivescoreid",
  msdyn_PredictiveScoreIdName = "msdyn_predictivescoreidname",
  msdyn_ScoreHistory = "msdyn_scorehistory",
  msdyn_ScoreReasons = "msdyn_scorereasons",
  msdyn_segmentid = "msdyn_segmentid",
  msdyn_segmentidName = "msdyn_segmentidname",
  msdyn_similaropportunities = "msdyn_similaropportunities",
  msdyn_WorkOrderType = "msdyn_workordertype",
  msdyn_WorkOrderTypeName = "msdyn_workordertypename",
  Name = "name",
  Need = "need",
  new_LastUpdateOwner = "new_lastupdateowner",
  new_OpportunityType = "new_opportunitytype",
  nmc_3x3Relationships = "nmc_3x3relationships",
  nmc_Askforreferrals = "nmc_askforreferrals",
  nmc_AssistSalesRep = "nmc_assistsalesrep",
  nmc_AssistSalesRepName = "nmc_assistsalesrepname",
  nmc_AssistType = "nmc_assisttype",
  nmc_Attachcompetitorsquoteifobtained = "nmc_attachcompetitorsquoteifobtained",
  nmc_AttachedQuote = "nmc_attachedquote",
  nmc_BidDate = "nmc_biddate",
  nmc_BU = "nmc_bu",
  nmc_BusinessPhone = "nmc_businessphone",
  nmc_CaptureConntract = "nmc_captureconntract",
  nmc_CashorFinanceDeal = "nmc_cashorfinancedeal",
  nmc_CATPWC = "nmc_catpwc",
  nmc_CATPWCName = "nmc_catpwcname",
  nmc_CATPWCYomiName = "nmc_catpwcyominame",
  nmc_CeresMake = "nmc_ceresmake",
  nmc_CeresMakeName = "nmc_ceresmakename",
  nmc_CeresModel = "nmc_ceresmodel",
  nmc_CeresModelName = "nmc_ceresmodelname",
  nmc_CIC = "nmc_cic",
  nmc_CICName = "nmc_cicname",
  nmc_CICYomiName = "nmc_cicyominame",
  nmc_City = "nmc_city",
  nmc_ClosedBy = "nmc_closedby",
  nmc_ClosedByName = "nmc_closedbyname",
  nmc_ClosedByYomiName = "nmc_closedbyyominame",
  nmc_CompareCompetitiveQuoteSpecifications = "nmc_comparecompetitivequotespecifications",
  nmc_CompetitorModelWonLost = "nmc_competitormodelwonlost",
  nmc_CompetitorPrice = "nmc_competitorprice",
  nmc_competitorprice_Base = "nmc_competitorprice_base",
  nmc_CompetitorWonLost = "nmc_competitorwonlost",
  nmc_ConfirmShopAvailability = "nmc_confirmshopavailability",
  nmc_Confirmspecification = "nmc_confirmspecification",
  nmc_ContactBusinessPhone = "nmc_contactbusinessphone",
  nmc_ContactHasEmail = "nmc_contacthasemail",
  nmc_ContractReviewed = "nmc_contractreviewed",
  nmc_Coordinatererentdetails = "nmc_coordinatererentdetails",
  nmc_CoordinatewithPSSRforMachinedelivery = "nmc_coordinatewithpssrformachinedelivery",
  nmc_CreateProject = "nmc_createproject",
  nmc_CrossSellingOpportunity = "nmc_crosssellingopportunity",
  nmc_CSAESCPresented = "nmc_csaescpresented",
  nmc_CustomerProspect = "nmc_customerprospect",
  nmc_CustomerProspectName = "nmc_customerprospectname",
  nmc_CustomerProspectYomiName = "nmc_customerprospectyominame",
  nmc_CVAQuoteRequest = "nmc_cvaquoterequest",
  nmc_DataconsentformSigned = "nmc_dataconsentformsigned",
  nmc_DaysOpen = "nmc_daysopen",
  nmc_DaysOpenCalculated = "nmc_daysopencalculated",
  nmc_DeliveryDate = "nmc_deliverydate",
  nmc_DeliveryServiceReportSigned = "nmc_deliveryservicereportsigned",
  nmc_Determinefullscopeofopportunity = "nmc_determinefullscopeofopportunity",
  nmc_doclosingquotes = "nmc_doclosingquotes",
  nmc_EngineeringType = "nmc_engineeringtype",
  nmc_EstimatedLaborHours = "nmc_estimatedlaborhours",
  nmc_ExpectedRevenueDate = "nmc_expectedrevenuedate",
  nmc_FinanceDocsSigned = "nmc_financedocssigned",
  nmc_forecastclosedate = "nmc_forecastclosedate",
  nmc_ForecastClosedDate = "nmc_forecastcloseddate",
  nmc_FundingSource = "nmc_fundingsource",
  nmc_FundingSourceName = "nmc_fundingsourcename",
  nmc_FundingSourceYomiName = "nmc_fundingsourceyominame",
  nmc_FundingType = "nmc_fundingtype",
  nmc_InsideSalesRep = "nmc_insidesalesrep",
  nmc_InsideSalesRepName = "nmc_insidesalesrepname",
  nmc_InsideSalesRepYomiName = "nmc_insidesalesrepyominame",
  nmc_LocateEquipment = "nmc_locateequipment",
  nmc_LookforExistingRepairOptions = "nmc_lookforexistingrepairoptions",
  nmc_LostSaleReport = "nmc_lostsalereport",
  nmc_ManufacturerWonLost = "nmc_manufacturerwonlost",
  nmc_MobilePhone = "nmc_mobilephone",
  nmc_NeedforDataModelingServices = "nmc_needfordatamodelingservices",
  nmc_NoEmailAddress = "nmc_noemailaddress",
  nmc_OpportunityNumberHasData = "nmc_opportunitynumberhasdata",
  nmc_OrderClass = "nmc_orderclass",
  nmc_OriginatingCallReport = "nmc_originatingcallreport",
  nmc_OriginatingCallReportName = "nmc_originatingcallreportname",
  nmc_PMAgreementOpportunity = "nmc_pmagreementopportunity",
  nmc_PresentDLLFinancingOptions = "nmc_presentdllfinancingoptions",
  nmc_PresentedCatFinancingOptions = "nmc_presentedcatfinancingoptions",
  nmc_ProjectContractID = "nmc_projectcontractid",
  nmc_ProjectGroup = "nmc_projectgroup",
  nmc_ProjectID = "nmc_projectid",
  nmc_ProjectName = "nmc_projectname",
  nmc_ProjectType = "nmc_projecttype",
  nmc_PromoteCurrentSpecials = "nmc_promotecurrentspecials",
  nmc_ProperCreditLine = "nmc_propercreditline",
  nmc_PurchaseRentorRPO = "nmc_purchaserentorrpo",
  nmc_ReadytocreateaRentalContract = "nmc_readytocreatearentalcontract",
  nmc_ReadytocreateaSalesOrder = "nmc_readytocreateasalesorder",
  nmc_Readytoquote = "nmc_readytoquote",
  nmc_RentalOrder = "nmc_rentalorder",
  nmc_RentalOrderName = "nmc_rentalordername",
  nmc_RequestingBusinessUnit = "nmc_requestingbusinessunit",
  nmc_RequestingBusinessUnitName = "nmc_requestingbusinessunitname",
  nmc_Requote = "nmc_requote",
  nmc_SalesOrder = "nmc_salesorder",
  nmc_SalesOrderName = "nmc_salesordername",
  nmc_SalespersonType = "nmc_salespersontype",
  nmc_SalesStages = "nmc_salesstages",
  nmc_ServiceCall1 = "nmc_servicecall1",
  nmc_ServiceCall1Name = "nmc_servicecall1name",
  nmc_SICCode = "nmc_siccode",
  nmc_SICCodeName = "nmc_siccodename",
  nmc_SignedPurchaseOrder = "nmc_signedpurchaseorder",
  nmc_SiteSurvey = "nmc_sitesurvey",
  nmc_State = "nmc_state",
  nmc_Street1 = "nmc_street1",
  nmc_TeamSellingPerformedwithwhom = "nmc_teamsellingperformedwithwhom",
  nmc_TradeInvolved = "nmc_tradeinvolved",
  nmc_type = "nmc_type",
  nmc_TypeofOpportunity = "nmc_typeofopportunity",
  nmc_W9Form13 = "nmc_w9form13",
  nmc_ZipCode = "nmc_zipcode",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityRatingCode = "opportunityratingcode",
  OriginatingLeadId = "originatingleadid",
  OriginatingLeadIdName = "originatingleadidname",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParentAccountIdName = "parentaccountidname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParentContactId = "parentcontactid",
  ParentContactIdName = "parentcontactidname",
  ParentContactIdYomiName = "parentcontactidyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PresentFinalProposal = "presentfinalproposal",
  PresentProposal = "presentproposal",
  PriceLevelId = "pricelevelid",
  PriceLevelIdName = "pricelevelidname",
  PricingErrorCode = "pricingerrorcode",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  ProposedSolution = "proposedsolution",
  PurchaseProcess = "purchaseprocess",
  PurchaseTimeframe = "purchasetimeframe",
  PursuitDecision = "pursuitdecision",
  QualificationComments = "qualificationcomments",
  QuoteComments = "quotecomments",
  ResolveFeedback = "resolvefeedback",
  SalesStage = "salesstage",
  SalesStageCode = "salesstagecode",
  ScheduleFollowup_Prospect = "schedulefollowup_prospect",
  ScheduleFollowup_Qualify = "schedulefollowup_qualify",
  ScheduleProposalMeeting = "scheduleproposalmeeting",
  SendThankYouNote = "sendthankyounote",
  SkipPriceCalculation = "skippricecalculation",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StepId = "stepid",
  StepName = "stepname",
  TeamsFollowed = "teamsfollowed",
  TimeLine = "timeline",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
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
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  z2t_AccountPlanId = "z2t_accountplanid",
  z2t_AccountPlanIdName = "z2t_accountplanidname",
  z2t_arrangementnumber = "z2t_arrangementnumber",
  z2t_AXOpportunityID = "z2t_axopportunityid",
  z2t_AXQuotedBy = "z2t_axquotedby",
  z2t_AXRecID = "z2t_axrecid",
  z2t_brakes = "z2t_brakes",
  z2t_CompatibilityCode = "z2t_compatibilitycode",
  z2t_CompatibilityCodeName = "z2t_compatibilitycodename",
  z2t_CompleteFinalProposal = "z2t_completefinalproposal",
  z2t_CompleteInternalReview = "z2t_completeinternalreview",
  z2t_ConfirmDecisionDates = "z2t_confirmdecisiondates",
  z2t_CRMQuotedBy = "z2t_crmquotedby",
  z2t_CRMQuotedByName = "z2t_crmquotedbyname",
  z2t_CRMQuotedByYomiName = "z2t_crmquotedbyyominame",
  z2t_cylinder = "z2t_cylinder",
  z2t_DateClosed = "z2t_dateclosed",
  z2t_daysopen = "z2t_daysopen",
  z2t_DevelopProposal = "z2t_developproposal",
  z2t_differential = "z2t_differential",
  z2t_Division = "z2t_division",
  z2t_DivisionName = "z2t_divisionname",
  z2t_EndUser = "z2t_enduser",
  z2t_EndUserName = "z2t_endusername",
  z2t_EndUserYomiName = "z2t_enduseryominame",
  z2t_engine = "z2t_engine",
  z2t_Engineer = "z2t_engineer",
  z2t_EngineerName = "z2t_engineername",
  z2t_EngineerYomiName = "z2t_engineeryominame",
  z2t_Equipment = "z2t_equipment",
  z2t_EquipmentName = "z2t_equipmentname",
  z2t_ExtendedWarrantyIncluded = "z2t_extendedwarrantyincluded",
  z2t_finaldrive = "z2t_finaldrive",
  z2t_fueltype = "z2t_fueltype",
  z2t_GeneralContractor = "z2t_generalcontractor",
  z2t_GeneralContractorName = "z2t_generalcontractorname",
  z2t_GeneralContractorYomiName = "z2t_generalcontractoryominame",
  z2t_hardhone = "z2t_hardhone",
  z2t_HydraulicsRepairAdditionalRepairs = "z2t_hydraulicsrepairadditionalrepairs",
  z2t_id = "z2t_id",
  z2t_IdentifyStakeholders = "z2t_identifystakeholders",
  z2t_interritory = "z2t_interritory",
  z2t_JobSiteId = "z2t_jobsiteid",
  z2t_JobSiteIdName = "z2t_jobsiteidname",
  z2t_KWRange = "z2t_kwrange",
  z2t_level2overhaul = "z2t_level2overhaul",
  z2t_lighthone = "z2t_lighthone",
  z2t_Make = "z2t_make",
  z2t_MakeName = "z2t_makename",
  z2t_Model = "z2t_model",
  z2t_ModelName = "z2t_modelname",
  z2t_motor = "z2t_motor",
  z2t_Notes = "z2t_notes",
  z2t_OpenedBy = "z2t_openedby",
  z2t_OpenedByName = "z2t_openedbyname",
  z2t_OpenedByYomiName = "z2t_openedbyyominame",
  z2t_opportunityphase = "z2t_opportunityphase",
  z2t_OpType = "z2t_optype",
  z2t_OtherRepair = "z2t_otherrepair",
  z2t_overhaulafterfailure = "z2t_overhaulafterfailure",
  z2t_overhaulbeforefailure = "z2t_overhaulbeforefailure",
  z2t_powertrainadditionalrepairs = "z2t_powertrainadditionalrepairs",
  z2t_PresentFinalProposal = "z2t_presentfinalproposal",
  z2t_PresentProposal = "z2t_presentproposal",
  z2t_Probability = "z2t_probability",
  z2t_product = "z2t_product",
  z2t_ProductFamily = "z2t_productfamily",
  z2t_ProductFamilyName = "z2t_productfamilyname",
  z2t_prognosis = "z2t_prognosis",
  z2t_Project = "z2t_project",
  z2t_ProjectName = "z2t_projectname",
  z2t_pump = "z2t_pump",
  z2t_quoteduedate = "z2t_quoteduedate",
  z2t_quoter = "z2t_quoter",
  z2t_rebearandreseal = "z2t_rebearandreseal",
  z2t_rebusheye = "z2t_rebusheye",
  z2t_recid = "z2t_recid",
  z2t_remanrod = "z2t_remanrod",
  z2t_removeandinstall = "z2t_removeandinstall",
  z2t_RentalEndDate = "z2t_rentalenddate",
  z2t_RentalStartDate = "z2t_rentalstartdate",
  z2t_repairindicatorscomments = "z2t_repairindicatorscomments",
  z2t_repairsummary = "z2t_repairsummary",
  z2t_SendThankYou = "z2t_sendthankyou",
  z2t_Serial = "z2t_serial",
  z2t_servicequoteapprovalstatus = "z2t_servicequoteapprovalstatus",
  z2t_servicequotedocnumber = "z2t_servicequotedocnumber",
  z2t_servicequoteformat = "z2t_servicequoteformat",
  z2t_servicequotenumber = "z2t_servicequotenumber",
  z2t_servicequotestatus = "z2t_servicequotestatus",
  z2t_SMU = "z2t_smu",
  z2t_SourceID = "z2t_sourceid",
  z2t_SourceIDName = "z2t_sourceidname",
  z2t_SourceTypeID = "z2t_sourcetypeid",
  z2t_SourceTypeIDName = "z2t_sourcetypeidname",
  z2t_store = "z2t_store",
  z2t_swot_type = "z2t_swot_type",
  z2t_tc = "z2t_tc",
}

// Early Bound Interface
export interface Opportunity extends IEntity {
  // Account LookupType Internal attribute for storing customerid. Do not use this attribute directly; use parentaccountid instead.
  accountid?: import("cdsify").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  accountidyominame?: string | null;
  // Actual Close Date DateTimeType Shows the date and time when the opportunity was closed or canceled. DateOnly:DateOnly
  actualclosedate?: Date | null;
  // Actual Revenue MoneyType Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won.
  actualvalue?: number | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualvalue_base?: number | null;
  // Competitor 1 Machine Quantity IntegerType
  axa_competitor1machinequantity?: number | null;
  // Serial Number StringType
  axa_serialnumber?: string | null;
  // Budget amount MoneyType Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget.
  budgetamount?: number | null;
  // Budget Amount (Base) MoneyType Value of the Budget Amount in base currency.
  budgetamount_base?: number | null;
  // Budget budgetstatus Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach.
  budgetstatus?: import("../enums/budgetstatus").budgetstatus | null;
  // Source Campaign LookupType Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign.
  campaignid?: import("cdsify").EntityReference | null;
  //  StringType
  campaignidname?: string | null;
  // Proposal Feedback Captured BooleanType Choose whether the proposal feedback has been captured for the opportunity.
  captureproposalfeedback?: boolean | null;
  // Probability (Numeric) IntegerType Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale.
  closeprobability?: number | null;
  // Final Proposal Ready BooleanType Select whether a final proposal has been completed for the opportunity.
  completefinalproposal?: boolean | null;
  // Complete Internal Review BooleanType Select whether an internal review has been completed for this opportunity.
  completeinternalreview?: boolean | null;
  // Confirm Interest BooleanType Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity.
  confirminterest?: boolean | null;
  // Contact LookupType Internal attribute for storing customerid. Do not use this attribute directly; use parentcontactid instead.
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
  // Current Situation MemoType Type notes about the company or organization associated with the opportunity.
  currentsituation?: string | null;
  // Potential Customer [Required] CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders.
  customerid?: import("cdsify").EntityReference;
  //  [Required] StringType
  customeridname?: string;
  // Potential Customer Type [Required] EntityNameType
  customeridtype?: string;
  //  [Required] StringType
  customeridyominame?: string;
  // Customer Need MemoType Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements.
  customerneed?: string | null;
  // Customer Pain Points MemoType Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points.
  customerpainpoints?: string | null;
  // Decision Maker? BooleanType Select whether your notes include information about who makes the purchase decisions at the lead's company.
  decisionmaker?: boolean | null;
  // Description MemoType Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.
  description?: string | null;
  // Develop Proposal BooleanType Select whether a proposal has been developed for the opportunity.
  developproposal?: boolean | null;
  // Opportunity Discount Amount MoneyType Type the discount amount for the opportunity if the customer is eligible for special savings.
  discountamount?: number | null;
  // Opportunity Discount Amount (Base) MoneyType Value of the Opportunity Discount Amount in base currency.
  discountamount_base?: number | null;
  // Opportunity Discount (%) DecimalType Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity.
  discountpercentage?: number | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Forecast Close Date [Required] DateTimeType Enter the expected closing date of the opportunity to help make accurate revenue forecasts. DateOnly:DateOnly
  estimatedclosedate?: Date;
  // Est. Revenue [Required] MoneyType Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field.
  estimatedvalue?: number;
  // Est. Revenue (Base) MoneyType Value of the Est. Revenue in base currency.
  estimatedvalue_base?: number | null;
  // Evaluate Fit BooleanType Select whether the fit between the lead's requirements and your offerings was evaluated.
  evaluatefit?: boolean | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // File Debrief BooleanType Choose whether the sales team has recorded detailed notes on the proposals and the account's responses.
  filedebrief?: boolean | null;
  // Final Decision Date DateTimeType Enter the date and time when the final decision of the opportunity was made. DateOnly:DateOnly
  finaldecisiondate?: Date | null;
  // Freight Amount MoneyType Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field.
  freightamount?: number | null;
  // Freight Amount (Base) MoneyType Value of the Freight Amount in base currency.
  freightamount_base?: number | null;
  // Identify Competitors BooleanType Select whether information about competitors is included.
  identifycompetitors?: boolean | null;
  // Identify Customer Contacts BooleanType Select whether the customer contacts for this opportunity have been identified.
  identifycustomercontacts?: boolean | null;
  // Identify Sales Team BooleanType Choose whether you have recorded who will pursue the opportunity.
  identifypursuitteam?: boolean | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Initial Communication initialcommunication Choose whether someone from the sales team contacted this lead earlier.
  initialcommunication?: import("../enums/initialcommunication").initialcommunication | null;
  // Is Private BooleanType Indicates whether the opportunity is private or visible to the entire organization.
  isprivate?: boolean | null;
  // Revenue BooleanType Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user.
  isrevenuesystemcalculated?: boolean | null;
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
  // Customer/Prospect Manager LookupType The account manager responsible for the opportunity.
  msdyn_accountmanagerid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_accountmanageridname?: string | null;
  //  StringType
  msdyn_accountmanageridyominame?: string | null;
  // Contracting Unit LookupType The organizational unit in charge of the opportunity.
  msdyn_contractorganizationalunitid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_contractorganizationalunitidname?: string | null;
  // Forecast category opportunity_msdyn_opportunity_msdyn_forecastcategory Categories used for forecasting.
  msdyn_forecastcategory?: import("../enums/opportunity_msdyn_opportunity_msdyn_forecastcategory").opportunity_msdyn_opportunity_msdyn_forecastcategory | null;
  // GDPR Optout BooleanType Describes whether opportunity is opted out or not
  msdyn_gdproptout?: boolean | null;
  // (Deprecated) Opportunity Grade msdyn_opportunitygradeoptset
  msdyn_opportunitygrade?: import("../enums/msdyn_opportunitygradeoptset").msdyn_opportunitygradeoptset | null;
  // KPI LookupType Maps to opportunity KPI records
  msdyn_opportunitykpiid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_opportunitykpiidname?: string | null;
  // (Deprecated) Opportunity Score IntegerType
  msdyn_opportunityscore?: number | null;
  // (Deprecated) Opportunity Score Trend msdyn_opportunityscoretrendoptset
  msdyn_opportunityscoretrend?: import("../enums/msdyn_opportunityscoretrendoptset").msdyn_opportunityscoretrendoptset | null;
  // Order Type opportunity_msdyn_opportunity_msdyn_ordertype Internal use only.
  msdyn_ordertype?: import("../enums/opportunity_msdyn_opportunity_msdyn_ordertype").opportunity_msdyn_opportunity_msdyn_ordertype | null;
  // Predictive Score LookupType Predictive score
  msdyn_predictivescoreid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_predictivescoreidname?: string | null;
  // (Deprecated) Score History MemoType
  msdyn_scorehistory?: string | null;
  // (Deprecated) Score Reasons MemoType
  msdyn_scorereasons?: string | null;
  // Segment Id LookupType Unique identifier for Segment associated with Opportunity.
  msdyn_segmentid?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_segmentidname?: string | null;
  // msdyn_similaropportunities MemoType
  msdyn_similaropportunities?: string | null;
  // Work Order Type LookupType Unique identifier for Work Order Type associated with Opportunity.
  msdyn_workordertype?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_workordertypename?: string | null;
  // Topic [Required] StringType Type a subject or descriptive name, such as the expected order or company name, for the opportunity.
  name?: string;
  // Need need Choose how high the level of need is for the lead's company.
  need?: import("../enums/need").need | null;
  // Last Update Owner DateTimeType DateOnly:UserLocal
  new_lastupdateowner?: Date | null;
  // Opportunity Type opportunity_new_opportunity_new_opportunitytype
  new_opportunitytype?: import("../enums/opportunity_new_opportunity_new_opportunitytype").opportunity_new_opportunity_new_opportunitytype | null;
  // 3x3 Relationships (Engineering & Field Service) BooleanType
  nmc_3x3relationships?: boolean | null;
  // Ask for referrals BooleanType
  nmc_askforreferrals?: boolean | null;
  // Assist Sales Rep LookupType
  nmc_assistsalesrep?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_assistsalesrepname?: string | null;
  // Assist Type opportunity_nmc_opportunity_nmc_assisttype
  nmc_assisttype?: import("../enums/opportunity_nmc_opportunity_nmc_assisttype").opportunity_nmc_opportunity_nmc_assisttype | null;
  // Attach competitors quote if obtained BooleanType
  nmc_attachcompetitorsquoteifobtained?: boolean | null;
  // Attached Quote? BooleanType
  nmc_attachedquote?: boolean | null;
  // Quote Date: [Required] DateTimeType DateOnly:DateOnly
  nmc_biddate?: Date;
  // BU StringType
  nmc_bu?: string | null;
  // Business Phone StringType
  nmc_businessphone?: string | null;
  // Capture Contract Signature BooleanType
  nmc_captureconntract?: boolean | null;
  // Cash or Finance Deal? BooleanType
  nmc_cashorfinancedeal?: boolean | null;
  // CAT PWC: LookupType
  nmc_catpwc?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_catpwcname?: string | null;
  //  StringType
  nmc_catpwcyominame?: string | null;
  // Ceres Make LookupType
  nmc_ceresmake?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_ceresmakename?: string | null;
  // Ceres Model LookupType
  nmc_ceresmodel?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_ceresmodelname?: string | null;
  // CIC Code: LookupType
  nmc_cic?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_cicname?: string | null;
  //  StringType
  nmc_cicyominame?: string | null;
  // City StringType
  nmc_city?: string | null;
  // Closed By LookupType
  nmc_closedby?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_closedbyname?: string | null;
  //  StringType
  nmc_closedbyyominame?: string | null;
  // Compare Competitive Quote & Specifications BooleanType
  nmc_comparecompetitivequotespecifications?: boolean | null;
  // Competitor Model Won/Lost StringType
  nmc_competitormodelwonlost?: string | null;
  // Competitor Price MoneyType
  nmc_competitorprice?: number | null;
  // Competitor Price (Base) MoneyType Value of the Competitor Price in base currency.
  nmc_competitorprice_base?: number | null;
  // Competitor Won/Lost StringType
  nmc_competitorwonlost?: string | null;
  // Confirm Shop Availability? BooleanType
  nmc_confirmshopavailability?: boolean | null;
  // Confirm specification & scope StringType Use this as a touchpoint for the customer
  nmc_confirmspecification?: string | null;
  // Contact Business Phone StringType
  nmc_contactbusinessphone?: string | null;
  // Contact Has Email BooleanType
  nmc_contacthasemail?: boolean | null;
  // Contract Reviewed? BooleanType
  nmc_contractreviewed?: boolean | null;
  // Coordinate re-rent details StringType
  nmc_coordinatererentdetails?: string | null;
  // Coordinate with PSSR for Machine delivery? BooleanType
  nmc_coordinatewithpssrformachinedelivery?: boolean | null;
  // Create Project BooleanType
  nmc_createproject?: boolean | null;
  // Cross Selling Opportunity BooleanType Select whether a Cross Selling Opportunity has been discovered for the opportunity.
  nmc_crosssellingopportunity?: boolean | null;
  // CSA & ESC Presented? BooleanType
  nmc_csaescpresented?: boolean | null;
  // Customer/Prospect LookupType
  nmc_customerprospect?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_customerprospectname?: string | null;
  //  StringType
  nmc_customerprospectyominame?: string | null;
  // CVA Quote Request? BooleanType
  nmc_cvaquoterequest?: boolean | null;
  // Data consent form Signed? BooleanType
  nmc_dataconsentformsigned?: boolean | null;
  // Days Open IntegerType
  nmc_daysopen?: number | null;
  // Days Open Calculated IntegerType
  nmc_daysopencalculated?: number | null;
  // Delivery Date: [Required] DateTimeType DateOnly:DateOnly
  nmc_deliverydate?: Date;
  // Delivery Service Report Signed? BooleanType
  nmc_deliveryservicereportsigned?: boolean | null;
  // Determine fullscope of opportunity StringType
  nmc_determinefullscopeofopportunity?: string | null;
  // do closing quotes BooleanType
  nmc_doclosingquotes?: boolean | null;
  // Engineering Type opportunity_nmc_opportunity_nmc_engineeringtype
  nmc_engineeringtype?: import("../enums/opportunity_nmc_opportunity_nmc_engineeringtype").opportunity_nmc_opportunity_nmc_engineeringtype | null;
  // Estimated Labor Hours IntegerType
  nmc_estimatedlaborhours?: number | null;
  // Expected Revenue Date [Required] DateTimeType DateOnly:DateOnly
  nmc_expectedrevenuedate?: Date;
  // Finance Docs Signed? BooleanType
  nmc_financedocssigned?: boolean | null;
  // Forecastclosedate DateTimeType DateOnly:UserLocal
  nmc_forecastclosedate?: Date | null;
  // Forecast Closed Date DateTimeType DateOnly:DateOnly
  nmc_forecastcloseddate?: Date | null;
  // Funding Source: LookupType
  nmc_fundingsource?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_fundingsourcename?: string | null;
  //  StringType
  nmc_fundingsourceyominame?: string | null;
  // Funding Type: opportunity_nmc_opportunity_nmc_fundingtype
  nmc_fundingtype?: import("../enums/opportunity_nmc_opportunity_nmc_fundingtype").opportunity_nmc_opportunity_nmc_fundingtype | null;
  // Inside Sales Rep LookupType
  nmc_insidesalesrep?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_insidesalesrepname?: string | null;
  //  StringType
  nmc_insidesalesrepyominame?: string | null;
  // Locate Equipment opportunity_nmc_opportunity_nmc_locateequipment
  nmc_locateequipment?: import("../enums/opportunity_nmc_opportunity_nmc_locateequipment").opportunity_nmc_opportunity_nmc_locateequipment | null;
  // Look for Existing Repair Options BooleanType
  nmc_lookforexistingrepairoptions?: boolean | null;
  // Lost Sale Report BooleanType
  nmc_lostsalereport?: boolean | null;
  // Manufacturer Won/Lost StringType
  nmc_manufacturerwonlost?: string | null;
  // Mobile Phone StringType
  nmc_mobilephone?: string | null;
  // Need for Data Modeling Services BooleanType
  nmc_needfordatamodelingservices?: boolean | null;
  // No Email Address? BooleanType
  nmc_noemailaddress?: boolean | null;
  // Opportunity # Has Data BooleanType
  nmc_opportunitynumberhasdata?: boolean | null;
  // Order Class: nmc_orderclasses
  nmc_orderclass?: import("../enums/nmc_orderclasses").nmc_orderclasses | null;
  // Originating Call Report LookupType
  nmc_originatingcallreport?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_originatingcallreportname?: string | null;
  // PM Agreement Opportunity? BooleanType
  nmc_pmagreementopportunity?: boolean | null;
  // Present DLL Financing Options BooleanType
  nmc_presentdllfinancingoptions?: boolean | null;
  // Presented Cat Financing Options? BooleanType
  nmc_presentedcatfinancingoptions?: boolean | null;
  // Project Contract ID: StringType
  nmc_projectcontractid?: string | null;
  // Project Group opportunity_nmc_opportunity_nmc_projectgroup
  nmc_projectgroup?: import("../enums/opportunity_nmc_opportunity_nmc_projectgroup").opportunity_nmc_opportunity_nmc_projectgroup | null;
  // Project ID: StringType
  nmc_projectid?: string | null;
  // Project Name: StringType
  nmc_projectname?: string | null;
  // Project Type opportunity_nmc_opportunity_nmc_projecttype
  nmc_projecttype?: import("../enums/opportunity_nmc_opportunity_nmc_projecttype").opportunity_nmc_opportunity_nmc_projecttype | null;
  // Promote Current Specials BooleanType
  nmc_promotecurrentspecials?: boolean | null;
  // Proper Credit Line and Insurance BooleanType
  nmc_propercreditline?: boolean | null;
  // Purchase Rent or RPO opportunity_nmc_opportunity_nmc_purchaserentorrpo
  nmc_purchaserentorrpo?: import("../enums/opportunity_nmc_opportunity_nmc_purchaserentorrpo").opportunity_nmc_opportunity_nmc_purchaserentorrpo | null;
  // Ready to create a Rental Contract BooleanType
  nmc_readytocreatearentalcontract?: boolean | null;
  // Ready to create a Sales Order BooleanType
  nmc_readytocreateasalesorder?: boolean | null;
  // Ready to quote BooleanType
  nmc_readytoquote?: boolean | null;
  // Rental Order LookupType
  nmc_rentalorder?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_rentalordername?: string | null;
  // Requesting Business Unit LookupType
  nmc_requestingbusinessunit?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_requestingbusinessunitname?: string | null;
  // Requote BooleanType
  nmc_requote?: boolean | null;
  // Sales Order LookupType
  nmc_salesorder?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_salesordername?: string | null;
  // Salesperson Type nmc_salespersontype
  nmc_salespersontype?: import("../enums/nmc_salespersontype").nmc_salespersontype | null;
  // Sales Stage opportunity_nmc_opportunity_nmc_salesstages
  nmc_salesstages?: import("../enums/opportunity_nmc_opportunity_nmc_salesstages").opportunity_nmc_opportunity_nmc_salesstages | null;
  // Service Call 1 LookupType
  nmc_servicecall1?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_servicecall1name?: string | null;
  // SIC Code: LookupType
  nmc_siccode?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_siccodename?: string | null;
  // Signed Purchase Order BooleanType
  nmc_signedpurchaseorder?: boolean | null;
  // Site Survey BooleanType
  nmc_sitesurvey?: boolean | null;
  // State StringType
  nmc_state?: string | null;
  // Street 1 StringType
  nmc_street1?: string | null;
  // Team Selling Performed-with whom? StringType
  nmc_teamsellingperformedwithwhom?: string | null;
  // Trade Involved? BooleanType
  nmc_tradeinvolved?: boolean | null;
  // Type-DNU StringType
  nmc_type?: string | null;
  // Type of Opportunity nmc_typeofopportunity
  nmc_typeofopportunity?: import("../enums/nmc_typeofopportunity").nmc_typeofopportunity | null;
  // W9 & Form 13? BooleanType Collect forms  the customer
  nmc_w9form13?: boolean | null;
  // Zip Code StringType
  nmc_zipcode?: string | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the opportunity was on hold.
  onholdtime?: number | null;
  // Opportunity UniqueidentifierType Unique identifier of the opportunity.
  opportunityid?: import("cdsify").Guid | null;
  // Rating opportunity_opportunity_opportunityratingcode Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability.
  opportunityratingcode?: import("../enums/opportunity_opportunity_opportunityratingcode").opportunity_opportunity_opportunityratingcode | null;
  // Originating Lead LookupType Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead.
  originatingleadid?: import("cdsify").EntityReference | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
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
  // Account [Required] LookupType Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities.
  parentaccountid?: import("cdsify").EntityReference;
  //  StringType
  parentaccountidname?: string | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Contact [Required] LookupType Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics.
  parentcontactid?: import("cdsify").EntityReference;
  //  StringType
  parentcontactidname?: string | null;
  //  StringType
  parentcontactidyominame?: string | null;
  // Participates in Workflow BooleanType Information about whether the opportunity participates in workflow rules.
  participatesinworkflow?: boolean | null;
  // Present Final Proposal BooleanType Select whether the final proposal has been presented to the account.
  presentfinalproposal?: boolean | null;
  // Presented Proposal BooleanType Select whether a proposal for the opportunity has been presented to the account.
  presentproposal?: boolean | null;
  // Price List LookupType Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
  pricelevelid?: import("cdsify").EntityReference | null;
  //  StringType
  pricelevelidname?: string | null;
  // Pricing Error  qooi_pricingerrorcode Pricing error for the opportunity.
  pricingerrorcode?: import("../enums/qooi_pricingerrorcode").qooi_pricingerrorcode | null;
  // Priority opportunity_opportunity_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/opportunity_opportunity_prioritycode").opportunity_opportunity_prioritycode | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("cdsify").Guid | null;
  // Proposed Solution MemoType Type notes about the proposed solution for the opportunity.
  proposedsolution?: string | null;
  // Purchase Process purchaseprocess Choose whether an individual or a committee will be involved in the  purchase process for the lead.
  purchaseprocess?: import("../enums/purchaseprocess").purchaseprocess | null;
  // Purchase Timeframe purchasetimeframe Choose how long the lead will likely take to make the purchase.
  purchasetimeframe?: import("../enums/purchasetimeframe").purchasetimeframe | null;
  // Decide Go/No-Go BooleanType Select whether the decision about pursuing the opportunity has been made.
  pursuitdecision?: boolean | null;
  // Qualification Comments MemoType Type comments about the qualification or scoring of the lead.
  qualificationcomments?: string | null;
  // Quote Comments MemoType Type comments about the quotes associated with the opportunity.
  quotecomments?: string | null;
  // Feedback Resolved BooleanType Choose whether the proposal feedback has been captured and resolved for the opportunity.
  resolvefeedback?: boolean | null;
  // Sales Stage opportunity_salesstage Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.
  salesstage?: import("../enums/opportunity_salesstage").opportunity_salesstage | null;
  // Process Code opportunity_opportunity_salesstagecode Select the sales process stage for the opportunity to indicate the probability of closing the opportunity.
  salesstagecode?: import("../enums/opportunity_opportunity_salesstagecode").opportunity_opportunity_salesstagecode | null;
  // Scheduled Follow up (Prospect) DateTimeType Enter the date and time of the prospecting follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_prospect?: Date | null;
  // Scheduled Follow up (Qualify) DateTimeType Enter the date and time of the qualifying follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_qualify?: Date | null;
  // Schedule Proposal Meeting DateTimeType Enter the date and time of the proposal meeting for the opportunity. DateOnly:UserLocal
  scheduleproposalmeeting?: Date | null;
  // Send Thank You Note BooleanType Select whether a thank you note has been sent to the account for considering the proposal.
  sendthankyounote?: boolean | null;
  // Skip Price Calculation qooi_skippricecalculation Skip Price Calculation (For Internal Use)
  skippricecalculation?: import("../enums/qooi_skippricecalculation").qooi_skippricecalculation | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the opportunity record.
  slaid?: import("cdsify").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this opportunity. This field is for internal use only.
  slainvokedid?: import("cdsify").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("cdsify").Guid | null;
  // Status opportunity_opportunity_statecode Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated.
  statecode?: import("../enums/opportunity_opportunity_statecode").opportunity_opportunity_statecode | null;
  // Status Reason opportunity_opportunity_statuscode Select the opportunity's status.
  statuscode?: import("../enums/opportunity_opportunity_statuscode").opportunity_opportunity_statuscode | null;
  // Step UniqueidentifierType Shows the ID of the workflow step.
  stepid?: import("cdsify").Guid | null;
  // Pipeline Phase StringType Shows the current phase in the sales pipeline for the opportunity. 
  stepname?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Timeline opportunity_opportunity_timeline Select when the opportunity is likely to be closed.
  timeline?: import("../enums/opportunity_opportunity_timeline").opportunity_opportunity_timeline | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the opportunity record.
  timespentbymeonemailandmeetings?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Total Amount MoneyType Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity.
  totalamount?: number | null;
  // Total Amount (Base) MoneyType Value of the Total Amount in base currency.
  totalamount_base?: number | null;
  // Total Pre-Freight Amount MoneyType Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity.
  totalamountlessfreight?: number | null;
  // Total Pre-Freight Amount (Base) MoneyType Value of the Total Pre-Freight Amount in base currency.
  totalamountlessfreight_base?: number | null;
  // Total Discount Amount MoneyType Shows the total discount amount, based on the discount price and rate entered on the opportunity.
  totaldiscountamount?: number | null;
  // Total Discount Amount (Base) MoneyType Value of the Total Discount Amount in base currency.
  totaldiscountamount_base?: number | null;
  // Total Detail Amount MoneyType Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities.
  totallineitemamount?: number | null;
  // Total Detail Amount (Base) MoneyType Value of the Total Detail Amount in base currency.
  totallineitemamount_base?: number | null;
  // Total Line Item Discount Amount MoneyType Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity.
  totallineitemdiscountamount?: number | null;
  // Total Line Item Discount Amount (Base) MoneyType Value of the Total Line Item Discount Amount in base currency.
  totallineitemdiscountamount_base?: number | null;
  // Total Tax MoneyType Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity.
  totaltax?: number | null;
  // Total Tax (Base) MoneyType Value of the Total Tax in base currency.
  totaltax_base?: number | null;
  // Currency [Required] LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("cdsify").EntityReference;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Account Plan LookupType Unique identifier for Account Plan associated with Opportunity.
  z2t_accountplanid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_accountplanidname?: string | null;
  // Arrangement Number StringType
  z2t_arrangementnumber?: string | null;
  // Opportunity ID StringType
  z2t_axopportunityid?: string | null;
  // AX Quoter By StringType
  z2t_axquotedby?: string | null;
  // AX Rec ID StringType
  z2t_axrecid?: string | null;
  // Brakes BooleanType
  z2t_brakes?: boolean | null;
  // Compatibility Code LookupType
  z2t_compatibilitycode?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_compatibilitycodename?: string | null;
  // Complete Final Proposal z2t_markcomplete
  z2t_completefinalproposal?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Complete Internal Review z2t_markcomplete
  z2t_completeinternalreview?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Confirm Decision Dates BooleanType
  z2t_confirmdecisiondates?: boolean | null;
  // CRM Quoted By LookupType
  z2t_crmquotedby?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_crmquotedbyname?: string | null;
  //  StringType
  z2t_crmquotedbyyominame?: string | null;
  // Cylinder BooleanType
  z2t_cylinder?: boolean | null;
  // Date Closed DateTimeType DateOnly:UserLocal
  z2t_dateclosed?: Date | null;
  // Days Open - z2t IntegerType
  z2t_daysopen?: number | null;
  // DevelopProposal z2t_markcomplete
  z2t_developproposal?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Differential BooleanType
  z2t_differential?: boolean | null;
  // Division [Required] LookupType
  z2t_division?: import("cdsify").EntityReference;
  //  StringType
  z2t_divisionname?: string | null;
  // End User LookupType
  z2t_enduser?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_endusername?: string | null;
  //  StringType
  z2t_enduseryominame?: string | null;
  // Engine BooleanType
  z2t_engine?: boolean | null;
  // Engineer of Record LookupType
  z2t_engineer?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_engineername?: string | null;
  //  StringType
  z2t_engineeryominame?: string | null;
  // Equipment LookupType
  z2t_equipment?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_equipmentname?: string | null;
  // Extended Warranty Included opportunity_z2t_opportunity_z2t_extendedwarrantyincluded
  z2t_extendedwarrantyincluded?: import("../enums/opportunity_z2t_opportunity_z2t_extendedwarrantyincluded").opportunity_z2t_opportunity_z2t_extendedwarrantyincluded | null;
  // Final Drive BooleanType
  z2t_finaldrive?: boolean | null;
  // Fuel Type opportunity_z2t_fueltype
  z2t_fueltype?: import("../enums/opportunity_z2t_fueltype").opportunity_z2t_fueltype | null;
  // General Contractor LookupType
  z2t_generalcontractor?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_generalcontractorname?: string | null;
  //  StringType
  z2t_generalcontractoryominame?: string | null;
  // Hard Hone BooleanType
  z2t_hardhone?: boolean | null;
  // Hydraulics Repair - Additional Repairs MemoType
  z2t_hydraulicsrepairadditionalrepairs?: string | null;
  // Opportunity Number StringType
  z2t_id?: string | null;
  // Identify Stakeholders z2t_markcomplete
  z2t_identifystakeholders?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // In Territory BooleanType
  z2t_interritory?: boolean | null;
  // Job Site LookupType Unique identifier for Job Site associated with Opportunity.
  z2t_jobsiteid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_jobsiteidname?: string | null;
  // KW Range z2t_kwrange
  z2t_kwrange?: import("../enums/z2t_kwrange").z2t_kwrange | null;
  // Level 2 Overhaul BooleanType
  z2t_level2overhaul?: boolean | null;
  // Light Hone BooleanType
  z2t_lighthone?: boolean | null;
  // Make [Required] LookupType
  z2t_make?: import("cdsify").EntityReference;
  //  StringType
  z2t_makename?: string | null;
  // Model [Required] LookupType
  z2t_model?: import("cdsify").EntityReference;
  //  StringType
  z2t_modelname?: string | null;
  // Motor BooleanType
  z2t_motor?: boolean | null;
  // Notes [Required] MemoType
  z2t_notes?: string;
  // Opened By LookupType
  z2t_openedby?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_openedbyname?: string | null;
  //  StringType
  z2t_openedbyyominame?: string | null;
  // Opportunity Phase opportunity_z2t_opportunityphase
  z2t_opportunityphase?: import("../enums/opportunity_z2t_opportunityphase").opportunity_z2t_opportunityphase | null;
  // Type [Required] z2t_type
  z2t_optype?: import("../enums/z2t_type").z2t_type;
  // Other Repair MemoType
  z2t_otherrepair?: string | null;
  // Overhaul After Failure BooleanType
  z2t_overhaulafterfailure?: boolean | null;
  // Overhaul Before Failure BooleanType
  z2t_overhaulbeforefailure?: boolean | null;
  // Power Train Additional Repairs StringType
  z2t_powertrainadditionalrepairs?: string | null;
  // Present Final Proposal z2t_markcomplete
  z2t_presentfinalproposal?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Present Proposal z2t_markcomplete
  z2t_presentproposal?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Probability [Required] opportunity_z2t_opportunity_z2t_probability
  z2t_probability?: import("../enums/opportunity_z2t_opportunity_z2t_probability").opportunity_z2t_opportunity_z2t_probability;
  // Product StringType
  z2t_product?: string | null;
  // Product Family LookupType
  z2t_productfamily?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_productfamilyname?: string | null;
  // Prognosis opportunity_z2t_prognosis
  z2t_prognosis?: import("../enums/opportunity_z2t_prognosis").opportunity_z2t_prognosis | null;
  // Project LookupType
  z2t_project?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_projectname?: string | null;
  // Pump BooleanType
  z2t_pump?: boolean | null;
  // Quote Due Date DateTimeType DateOnly:UserLocal
  z2t_quoteduedate?: Date | null;
  // Quoter StringType
  z2t_quoter?: string | null;
  // Rebear and Reseal BooleanType
  z2t_rebearandreseal?: boolean | null;
  // Re-bush Eye BooleanType
  z2t_rebusheye?: boolean | null;
  // REC ID StringType
  z2t_recid?: string | null;
  // Reman Rod BooleanType
  z2t_remanrod?: boolean | null;
  // Remove and Install BooleanType
  z2t_removeandinstall?: boolean | null;
  // Rental End Date DateTimeType DateOnly:UserLocal
  z2t_rentalenddate?: Date | null;
  // Rental Start Date DateTimeType DateOnly:UserLocal
  z2t_rentalstartdate?: Date | null;
  // Repair Indicators Comments StringType
  z2t_repairindicatorscomments?: string | null;
  // Repair Summary StringType
  z2t_repairsummary?: string | null;
  // Send Thank You z2t_markcomplete
  z2t_sendthankyou?: import("../enums/z2t_markcomplete").z2t_markcomplete | null;
  // Serial (Equipment) StringType
  z2t_serial?: string | null;
  // Service Quote Approval Status opportunity_z2t_servicequoteapprovalstatus
  z2t_servicequoteapprovalstatus?: import("../enums/opportunity_z2t_servicequoteapprovalstatus").opportunity_z2t_servicequoteapprovalstatus | null;
  // Service Quote Doc Number StringType
  z2t_servicequotedocnumber?: string | null;
  // Service Quote Format opportunity_z2t_servicequoteformat
  z2t_servicequoteformat?: import("../enums/opportunity_z2t_servicequoteformat").opportunity_z2t_servicequoteformat | null;
  // Service Quote Number StringType
  z2t_servicequotenumber?: string | null;
  // Service Quote Status opportunity_z2t_servicequotestatus
  z2t_servicequotestatus?: import("../enums/opportunity_z2t_servicequotestatus").opportunity_z2t_servicequotestatus | null;
  // SMU StringType
  z2t_smu?: string | null;
  // Source ID LookupType
  z2t_sourceid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_sourceidname?: string | null;
  // Source Type LookupType
  z2t_sourcetypeid?: import("cdsify").EntityReference | null;
  //  StringType
  z2t_sourcetypeidname?: string | null;
  // Store opportunity_z2t_store
  z2t_store?: import("../enums/opportunity_z2t_store").opportunity_z2t_store | null;
  // Swot Type StringType
  z2t_swot_type?: string | null;
  // T/C BooleanType
  z2t_tc?: boolean | null;
}
