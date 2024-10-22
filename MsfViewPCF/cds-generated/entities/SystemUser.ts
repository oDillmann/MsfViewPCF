/* eslint-disable*/
import { IEntity } from "cdsify";
// Entity SystemUser
export const systemuserMetadata = {
  typeName: "mscrm.systemuser",
  logicalName: "systemuser",
  collectionName: "systemusers",
  primaryIdAttribute: "ownerid",
  attributeTypes: {
    // Numeric Types
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    identityid: "Integer",
    importsequencenumber: "Integer",
    msdyn_capacity: "Integer",
    passporthi: "Integer",
    passportlo: "Integer",
    timezoneruleversionnumber: "Integer",
    userlicensetype: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    accessmode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    azurestate: "Optionset",
    caltype: "Optionset",
    deletedstate: "Optionset",
    emailrouteraccessapproval: "Optionset",
    incomingemaildeliverymethod: "Optionset",
    invitestatuscode: "Optionset",
    msdyn_agentType: "Optionset",
    msdyn_botprovider: "Optionset",
    msdyn_usertype: "Optionset",
    nmc_orderclass: "Optionset",
    nmc_salespersontype: "Optionset",
    outgoingemaildeliverymethod: "Optionset",
    preferredaddresscode: "Optionset",
    preferredemailcode: "Optionset",
    preferredphonecode: "Optionset",
    // Date Formats
    azuredeletedon: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    latestupdatetime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    territoryid: ["mscrm.territory"],
    stageid_processstage: ["mscrm.processstage"],
    siteid: ["mscrm.site"],
    queueid: ["mscrm.queue"],
    positionid: ["mscrm.position"],
    parentsystemuserid: ["mscrm.systemuser"],
    organizationid_organization: ["mscrm.organization"],
    nmc_RentalCoordinator: ["mscrm.contact"],
    nmc_Division: ["mscrm.z2t_division"],
    msdyn_DefaultPresenceIdUser: ["mscrm.msdyn_presence"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    mobileofflineprofileid: ["mscrm.mobileofflineprofile"],
    defaultmailbox: ["mscrm.mailbox"],
    crf08_Location: ["mscrm.crf08_location"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    calendarid: ["mscrm.calendar"],
    businessunitid: ["mscrm.businessunit"],
  },
};

// Attribute constants
export enum SystemUserAttributes {
  AccessMode = "accessmode",
  ActiveDirectoryGuid = "activedirectoryguid",
  Address1_AddressId = "address1_addressid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address1_City = "address1_city",
  Address1_Composite = "address1_composite",
  Address1_Country = "address1_country",
  Address1_County = "address1_county",
  Address1_Fax = "address1_fax",
  Address1_Latitude = "address1_latitude",
  Address1_Line1 = "address1_line1",
  Address1_Line2 = "address1_line2",
  Address1_Line3 = "address1_line3",
  Address1_Longitude = "address1_longitude",
  Address1_Name = "address1_name",
  Address1_PostalCode = "address1_postalcode",
  Address1_PostOfficeBox = "address1_postofficebox",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address1_Telephone1 = "address1_telephone1",
  Address1_Telephone2 = "address1_telephone2",
  Address1_Telephone3 = "address1_telephone3",
  Address1_UPSZone = "address1_upszone",
  Address1_UTCOffset = "address1_utcoffset",
  Address2_AddressId = "address2_addressid",
  Address2_AddressTypeCode = "address2_addresstypecode",
  Address2_City = "address2_city",
  Address2_Composite = "address2_composite",
  Address2_Country = "address2_country",
  Address2_County = "address2_county",
  Address2_Fax = "address2_fax",
  Address2_Latitude = "address2_latitude",
  Address2_Line1 = "address2_line1",
  Address2_Line2 = "address2_line2",
  Address2_Line3 = "address2_line3",
  Address2_Longitude = "address2_longitude",
  Address2_Name = "address2_name",
  Address2_PostalCode = "address2_postalcode",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  Address2_UPSZone = "address2_upszone",
  Address2_UTCOffset = "address2_utcoffset",
  ApplicationId = "applicationid",
  ApplicationIdUri = "applicationiduri",
  AzureActiveDirectoryObjectId = "azureactivedirectoryobjectid",
  AzureDeletedOn = "azuredeletedon",
  AzureState = "azurestate",
  BusinessUnitId = "businessunitid",
  BusinessUnitIdName = "businessunitidname",
  CalendarId = "calendarid",
  CALType = "caltype",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  crf08_Location = "crf08_location",
  crf08_LocationName = "crf08_locationname",
  DefaultFiltersPopulated = "defaultfilterspopulated",
  DefaultMailbox = "defaultmailbox",
  DefaultMailboxName = "defaultmailboxname",
  DefaultOdbFolderName = "defaultodbfoldername",
  DeletedState = "deletedstate",
  DisabledReason = "disabledreason",
  DisplayInServiceViews = "displayinserviceviews",
  DomainName = "domainname",
  EmailRouterAccessApproval = "emailrouteraccessapproval",
  EmployeeId = "employeeid",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  FirstName = "firstname",
  FullName = "fullname",
  GovernmentId = "governmentid",
  HomePhone = "homephone",
  IdentityId = "identityid",
  ImportSequenceNumber = "importsequencenumber",
  IncomingEmailDeliveryMethod = "incomingemaildeliverymethod",
  InternalEMailAddress = "internalemailaddress",
  InviteStatusCode = "invitestatuscode",
  IsActiveDirectoryUser = "isactivedirectoryuser",
  IsDisabled = "isdisabled",
  IsEmailAddressApprovedByO365Admin = "isemailaddressapprovedbyo365admin",
  IsIntegrationUser = "isintegrationuser",
  IsLicensed = "islicensed",
  IsSyncWithDirectory = "issyncwithdirectory",
  JobTitle = "jobtitle",
  LastName = "lastname",
  LatestUpdateTime = "latestupdatetime",
  MiddleName = "middlename",
  MobileAlertEMail = "mobilealertemail",
  MobileOfflineProfileId = "mobileofflineprofileid",
  MobileOfflineProfileIdName = "mobileofflineprofileidname",
  MobilePhone = "mobilephone",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_AgentType = "msdyn_agentType",
  msdyn_BotApplicationId = "msdyn_botapplicationid",
  msdyn_BotDescription = "msdyn_botdescription",
  msdyn_BotEndpoint = "msdyn_botendpoint",
  msdyn_bothandle = "msdyn_bothandle",
  msdyn_BotProvider = "msdyn_botprovider",
  msdyn_BotSecretKeys = "msdyn_botsecretkeys",
  msdyn_Capacity = "msdyn_capacity",
  msdyn_DefaultPresenceIdUser = "msdyn_defaultpresenceiduser",
  msdyn_DefaultPresenceIdUserName = "msdyn_defaultpresenceidusername",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_gridwrappercontrolfield = "msdyn_gridwrappercontrolfield",
  msdyn_isexpertenabledforswarm = "msdyn_isexpertenabledforswarm",
  msdyn_OwningEnvironmentId = "msdyn_owningenvironmentid",
  msdyn_UserType = "msdyn_usertype",
  NickName = "nickname",
  nmc_Division = "nmc_division",
  nmc_DivisionName = "nmc_divisionname",
  nmc_OrderClass = "nmc_orderclass",
  nmc_RentalCoordinator = "nmc_rentalcoordinator",
  nmc_RentalCoordinatorName = "nmc_rentalcoordinatorname",
  nmc_RentalCoordinatorYomiName = "nmc_rentalcoordinatoryominame",
  nmc_SalesPersonType = "nmc_salespersontype",
  nmc_TeamName = "nmc_teamname",
  OrganizationId = "organizationid",
  OrganizationIdName = "organizationidname",
  OutgoingEmailDeliveryMethod = "outgoingemaildeliverymethod",
  OverriddenCreatedOn = "overriddencreatedon",
  ParentSystemUserId = "parentsystemuserid",
  ParentSystemUserIdName = "parentsystemuseridname",
  ParentSystemUserIdYomiName = "parentsystemuseridyominame",
  PassportHi = "passporthi",
  PassportLo = "passportlo",
  PersonalEMailAddress = "personalemailaddress",
  PhotoUrl = "photourl",
  PositionId = "positionid",
  PositionIdName = "positionidname",
  PreferredAddressCode = "preferredaddresscode",
  PreferredEmailCode = "preferredemailcode",
  PreferredPhoneCode = "preferredphonecode",
  ProcessId = "processid",
  QueueId = "queueid",
  QueueIdName = "queueidname",
  Salutation = "salutation",
  SetupUser = "setupuser",
  SharePointEmailAddress = "sharepointemailaddress",
  SiteId = "siteid",
  SiteIdName = "siteidname",
  Skills = "skills",
  StageId = "stageid",
  SystemUserId = "systemuserid",
  TerritoryId = "territoryid",
  TerritoryIdName = "territoryidname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Title = "title",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UserLicenseType = "userlicensetype",
  UserPuid = "userpuid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WindowsLiveID = "windowsliveid",
  YammerEmailAddress = "yammeremailaddress",
  YammerUserId = "yammeruserid",
  YomiFirstName = "yomifirstname",
  YomiFullName = "yomifullname",
  YomiLastName = "yomilastname",
  YomiMiddleName = "yomimiddlename",
  z2t_AXID = "z2t_axid",
}

// Early Bound Interface
export interface SystemUser extends IEntity {
  // Access Mode systemuser_systemuser_accessmode Type of user.
  accessmode?: import("../enums/systemuser_systemuser_accessmode").systemuser_systemuser_accessmode | null;
  // Active Directory Guid UniqueidentifierType Active Directory object GUID for the system user.
  activedirectoryguid?: import("cdsify").Guid | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("cdsify").Guid | null;
  // Address 1: Address Type systemuser_systemuser_address1_addresstypecode Type of address for address 1, such as billing, shipping, or primary address.
  address1_addresstypecode?: import("../enums/systemuser_systemuser_address1_addresstypecode").systemuser_systemuser_address1_addresstypecode | null;
  // City StringType City name for address 1.
  address1_city?: string | null;
  // Address MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // Country/Region StringType Country/region name in address 1.
  address1_country?: string | null;
  // Address 1: County StringType County name for address 1.
  address1_county?: string | null;
  // Address 1: Fax StringType Fax number for address 1.
  address1_fax?: string | null;
  // Address 1: Latitude DoubleType Latitude for address 1.
  address1_latitude?: number | null;
  // Street 1 StringType First line for entering address 1 information.
  address1_line1?: string | null;
  // Street 2 StringType Second line for entering address 1 information.
  address1_line2?: string | null;
  // Street 3 StringType Third line for entering address 1 information.
  address1_line3?: string | null;
  // Address 1: Longitude DoubleType Longitude for address 1.
  address1_longitude?: number | null;
  // Address 1: Name StringType Name to enter for address 1.
  address1_name?: string | null;
  // ZIP/Postal Code StringType ZIP Code or postal code for address 1.
  address1_postalcode?: string | null;
  // Address 1: Post Office Box StringType Post office box number for address 1.
  address1_postofficebox?: string | null;
  // Address 1: Shipping Method systemuser_systemuser_address1_shippingmethodcode Method of shipment for address 1.
  address1_shippingmethodcode?: import("../enums/systemuser_systemuser_address1_shippingmethodcode").systemuser_systemuser_address1_shippingmethodcode | null;
  // State/Province StringType State or province for address 1.
  address1_stateorprovince?: string | null;
  // Main Phone StringType First telephone number associated with address 1.
  address1_telephone1?: string | null;
  // Other Phone StringType Second telephone number associated with address 1.
  address1_telephone2?: string | null;
  // Pager StringType Third telephone number associated with address 1.
  address1_telephone3?: string | null;
  // Address 1: UPS Zone StringType United Parcel Service (UPS) zone for address 1.
  address1_upszone?: string | null;
  // Address 1: UTC Offset IntegerType UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time.
  address1_utcoffset?: number | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("cdsify").Guid | null;
  // Address 2: Address Type systemuser_systemuser_address2_addresstypecode Type of address for address 2, such as billing, shipping, or primary address.
  address2_addresstypecode?: import("../enums/systemuser_systemuser_address2_addresstypecode").systemuser_systemuser_address2_addresstypecode | null;
  // Other City StringType City name for address 2.
  address2_city?: string | null;
  // Other Address MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  // Other Country/Region StringType Country/region name in address 2.
  address2_country?: string | null;
  // Address 2: County StringType County name for address 2.
  address2_county?: string | null;
  // Address 2: Fax StringType Fax number for address 2.
  address2_fax?: string | null;
  // Address 2: Latitude DoubleType Latitude for address 2.
  address2_latitude?: number | null;
  // Other Street 1 StringType First line for entering address 2 information.
  address2_line1?: string | null;
  // Other Street 2 StringType Second line for entering address 2 information.
  address2_line2?: string | null;
  // Other Street 3 StringType Third line for entering address 2 information.
  address2_line3?: string | null;
  // Address 2: Longitude DoubleType Longitude for address 2.
  address2_longitude?: number | null;
  // Address 2: Name StringType Name to enter for address 2.
  address2_name?: string | null;
  // Other ZIP/Postal Code StringType ZIP Code or postal code for address 2.
  address2_postalcode?: string | null;
  // Address 2: Post Office Box StringType Post office box number for address 2.
  address2_postofficebox?: string | null;
  // Address 2: Shipping Method systemuser_systemuser_address2_shippingmethodcode Method of shipment for address 2.
  address2_shippingmethodcode?: import("../enums/systemuser_systemuser_address2_shippingmethodcode").systemuser_systemuser_address2_shippingmethodcode | null;
  // Other State/Province StringType State or province for address 2.
  address2_stateorprovince?: string | null;
  // Address 2: Telephone 1 StringType First telephone number associated with address 2.
  address2_telephone1?: string | null;
  // Address 2: Telephone 2 StringType Second telephone number associated with address 2.
  address2_telephone2?: string | null;
  // Address 2: Telephone 3 StringType Third telephone number associated with address 2.
  address2_telephone3?: string | null;
  // Address 2: UPS Zone StringType United Parcel Service (UPS) zone for address 2.
  address2_upszone?: string | null;
  // Address 2: UTC Offset IntegerType UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time.
  address2_utcoffset?: number | null;
  // Application ID UniqueidentifierType The identifier for the application. This is used to access data in another application.
  applicationid?: import("cdsify").Guid | null;
  // Application ID URI StringType The URI used as a unique logical identifier for the external app. This can be used to validate the application.
  applicationiduri?: string | null;
  // Azure AD Object ID UniqueidentifierType This is the application directory object Id.
  azureactivedirectoryobjectid?: import("cdsify").Guid | null;
  // Azure Deleted On DateTimeType Date and time when the user was set as soft deleted in Azure. DateAndTime:UserLocal
  azuredeletedon?: Date | null;
  // Azure State systemuser_systemuser_azurestate Azure state of user
  azurestate?: import("../enums/systemuser_systemuser_azurestate").systemuser_systemuser_azurestate | null;
  // Business Unit LookupType Unique identifier of the business unit with which the user is associated.
  businessunitid?: import("cdsify").EntityReference | null;
  //  StringType
  businessunitidname?: string | null;
  // Calendar LookupType Fiscal calendar associated with the user.
  calendarid?: import("cdsify").EntityReference | null;
  // License Type systemuser_systemuser_caltype License type of user. This is used only in the on-premises version of the product. Online licenses are managed through Microsoft 365 Office Portal
  caltype?: import("../enums/systemuser_systemuser_caltype").systemuser_systemuser_caltype | null;
  // Created By LookupType Unique identifier of the user who created the user.
  createdby?: import("cdsify").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the user was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the systemuser.
  createdonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Location LookupType
  crf08_location?: import("cdsify").EntityReference | null;
  //  StringType
  crf08_locationname?: string | null;
  // Default Filters Populated BooleanType Indicates if default outlook filters have been populated.
  defaultfilterspopulated?: boolean | null;
  // Mailbox LookupType Select the mailbox associated with this user.
  defaultmailbox?: import("cdsify").EntityReference | null;
  //  StringType
  defaultmailboxname?: string | null;
  // Default OneDrive for Business Folder Name StringType Type a default folder name for the user's OneDrive For Business location.
  defaultodbfoldername?: string | null;
  // Deleted State systemuser_systemuser_deletestate User delete state
  deletedstate?: import("../enums/systemuser_systemuser_deletestate").systemuser_systemuser_deletestate | null;
  // Disabled Reason StringType Reason for disabling the user.
  disabledreason?: string | null;
  // Display in Service Views BooleanType Whether to display the user in service views.
  displayinserviceviews?: boolean | null;
  // User Name StringType Active Directory domain of which the user is a member.
  domainname?: string | null;
  // Primary Email Status systemuser_systemuser_emailrouteraccessapproval Shows the status of the primary email address.
  emailrouteraccessapproval?: import("../enums/systemuser_systemuser_emailrouteraccessapproval").systemuser_systemuser_emailrouteraccessapproval | null;
  // Employee StringType Employee identifier for the user.
  employeeid?: string | null;
  // Entity Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("cdsify").Guid | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the systemuser with respect to the base currency.
  exchangerate?: number | null;
  // First Name [Required] StringType First name of the user.
  firstname?: string;
  // Full Name StringType Full name of the user.
  fullname?: string | null;
  // Government StringType Government identifier for the user.
  governmentid?: string | null;
  // Home Phone StringType Home phone number for the user.
  homephone?: string | null;
  // Unique user identity id IntegerType For internal use only.
  identityid?: number | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Incoming Email Delivery Method systemuser_systemuser_incomingemaildeliverymethod Incoming email delivery method for the user.
  incomingemaildeliverymethod?: import("../enums/systemuser_systemuser_incomingemaildeliverymethod").systemuser_systemuser_incomingemaildeliverymethod | null;
  // Primary Email StringType Internal email address for the user.
  internalemailaddress?: string | null;
  // Invitation Status [Required] systemuser_systemuser_invitestatuscode User invitation status.
  invitestatuscode?: import("../enums/systemuser_systemuser_invitestatuscode").systemuser_systemuser_invitestatuscode;
  // Is Active Directory User BooleanType Information about whether the user is an AD user.
  isactivedirectoryuser?: boolean | null;
  // Status BooleanType Information about whether the user is enabled.
  isdisabled?: boolean | null;
  // Email Address O365 Admin Approval Status BooleanType Shows the status of approval of the email address by O365 Admin.
  isemailaddressapprovedbyo365admin?: boolean | null;
  // Integration user mode BooleanType Check if user is an integration user.
  isintegrationuser?: boolean | null;
  // User Licensed BooleanType Information about whether the user is licensed.
  islicensed?: boolean | null;
  // User Synced BooleanType Information about whether the user is synced with the directory.
  issyncwithdirectory?: boolean | null;
  // Job Title StringType Job title of the user.
  jobtitle?: string | null;
  // Last Name [Required] StringType Last name of the user.
  lastname?: string;
  // Latest User Update Time DateTimeType Time stamp of the latest update for the user DateAndTime:UserLocal
  latestupdatetime?: Date | null;
  // Middle Name StringType Middle name of the user.
  middlename?: string | null;
  // Mobile Alert Email StringType Mobile alert email address for the user.
  mobilealertemail?: string | null;
  // Mobile Offline Profile LookupType Items contained with a particular SystemUser.
  mobileofflineprofileid?: import("cdsify").EntityReference | null;
  //  StringType
  mobileofflineprofileidname?: string | null;
  // Mobile Phone StringType Mobile phone number for the user.
  mobilephone?: string | null;
  // Modified By LookupType Unique identifier of the user who last modified the user.
  modifiedby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the user was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the systemuser.
  modifiedonbehalfby?: import("cdsify").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // User type systemuser_msdyn_systemuser_msdyn_agentType Type of user - Application user or Bot application user
  msdyn_agentType?: import("../enums/systemuser_msdyn_systemuser_msdyn_agentType").systemuser_msdyn_systemuser_msdyn_agentType | null;
  // Bot application ID StringType Application ID of the bot.
  msdyn_botapplicationid?: string | null;
  // Description MemoType BOT User Description
  msdyn_botdescription?: string | null;
  // Endpoint StringType Bot User Endpoint
  msdyn_botendpoint?: string | null;
  // Bot handle StringType Bot handle
  msdyn_bothandle?: string | null;
  // Bot Provider [Required] systemuser_msdyn_systemuser_msdyn_botprovider Indicates the type of bot
  msdyn_botprovider?: import("../enums/systemuser_msdyn_systemuser_msdyn_botprovider").systemuser_msdyn_systemuser_msdyn_botprovider;
  // Secret Keys StringType Bot User Secret Keys
  msdyn_botsecretkeys?: string | null;
  // Capacity IntegerType Capacity associated with the User.
  msdyn_capacity?: number | null;
  // Default Presence LookupType Unique identifier for Presence associated with User.
  msdyn_defaultpresenceiduser?: import("cdsify").EntityReference | null;
  //  StringType
  msdyn_defaultpresenceidusername?: string | null;
  // GDPR Optout BooleanType Describes whether user is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Grid Wrapper Control field StringType Field to bind grid wrapper control
  msdyn_gridwrappercontrolfield?: string | null;
  // Expert Enabled Swarm [Required] BooleanType Check if swarm is enabled for the experts.
  msdyn_isexpertenabledforswarm?: boolean;
  // Owning Environment Id StringType Environment Id of the CDS environment that owns the bot user.
  msdyn_owningenvironmentid?: string | null;
  // Type systemuser_msdyn_systemuser_msdyn_usertype Type of user - CRM or BOT user
  msdyn_usertype?: import("../enums/systemuser_msdyn_systemuser_msdyn_usertype").systemuser_msdyn_systemuser_msdyn_usertype | null;
  // Nickname StringType Nickname of the user.
  nickname?: string | null;
  // Division LookupType
  nmc_division?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_divisionname?: string | null;
  // Order Class nmc_orderclasses
  nmc_orderclass?: import("../enums/nmc_orderclasses").nmc_orderclasses | null;
  // Rental Coordinator LookupType
  nmc_rentalcoordinator?: import("cdsify").EntityReference | null;
  //  StringType
  nmc_rentalcoordinatorname?: string | null;
  //  StringType
  nmc_rentalcoordinatoryominame?: string | null;
  // Salesperson Type nmc_salespersontype
  nmc_salespersontype?: import("../enums/nmc_salespersontype").nmc_salespersontype | null;
  // Team Name StringType
  nmc_teamname?: string | null;
  // Organization  UniqueidentifierType Unique identifier of the organization associated with the user.
  organizationid?: import("cdsify").Guid | null;
  //  StringType
  organizationidname?: string | null;
  // Outgoing Email Delivery Method systemuser_systemuser_outgoingemaildeliverymethod Outgoing email delivery method for the user.
  outgoingemaildeliverymethod?: import("../enums/systemuser_systemuser_outgoingemaildeliverymethod").systemuser_systemuser_outgoingemaildeliverymethod | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Manager LookupType Unique identifier of the manager of the user.
  parentsystemuserid?: import("cdsify").EntityReference | null;
  //  StringType
  parentsystemuseridname?: string | null;
  //  StringType
  parentsystemuseridyominame?: string | null;
  // Passport Hi IntegerType For internal use only.
  passporthi?: number | null;
  // Passport Lo IntegerType For internal use only.
  passportlo?: number | null;
  // Email 2 StringType Personal email address of the user.
  personalemailaddress?: string | null;
  // Photo URL StringType URL for the Website on which a photo of the user is located.
  photourl?: string | null;
  // Position LookupType User's position in hierarchical security model.
  positionid?: import("cdsify").EntityReference | null;
  //  StringType
  positionidname?: string | null;
  // Preferred Address systemuser_systemuser_preferredaddresscode Preferred address for the user.
  preferredaddresscode?: import("../enums/systemuser_systemuser_preferredaddresscode").systemuser_systemuser_preferredaddresscode | null;
  // Preferred Email systemuser_systemuser_preferredemailcode Preferred email address for the user.
  preferredemailcode?: import("../enums/systemuser_systemuser_preferredemailcode").systemuser_systemuser_preferredemailcode | null;
  // Preferred Phone systemuser_systemuser_preferredphonecode Preferred phone number for the user.
  preferredphonecode?: import("../enums/systemuser_systemuser_preferredphonecode").systemuser_systemuser_preferredphonecode | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("cdsify").Guid | null;
  // Default Queue LookupType Unique identifier of the default queue for the user.
  queueid?: import("cdsify").EntityReference | null;
  //  StringType
  queueidname?: string | null;
  // Salutation StringType Salutation for correspondence with the user.
  salutation?: string | null;
  // Restricted Access Mode BooleanType Check if user is a setup user.
  setupuser?: boolean | null;
  // SharePoint Email Address StringType SharePoint Work Email Address
  sharepointemailaddress?: string | null;
  // Site LookupType Site at which the user is located.
  siteid?: import("cdsify").EntityReference | null;
  //  StringType
  siteidname?: string | null;
  // Skills StringType Skill set of the user.
  skills?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("cdsify").Guid | null;
  // User UniqueidentifierType Unique identifier for the user.
  systemuserid?: import("cdsify").Guid | null;
  // Territory LookupType Unique identifier of the territory to which the user is assigned.
  territoryid?: import("cdsify").EntityReference | null;
  //  StringType
  territoryidname?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Title StringType Title of the user.
  title?: string | null;
  // Currency LookupType Unique identifier of the currency associated with the systemuser.
  transactioncurrencyid?: import("cdsify").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // User License Type IntegerType Shows the type of user license.
  userlicensetype?: number | null;
  // User PUID StringType  User PUID User Identifiable Information
  userpuid?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version number BigIntType Version number of the user.
  versionnumber?: number | null;
  // Windows Live ID StringType Windows Live ID
  windowsliveid?: string | null;
  // Yammer Email StringType User's Yammer login email address
  yammeremailaddress?: string | null;
  // Yammer User ID StringType User's Yammer ID
  yammeruserid?: string | null;
  // Yomi First Name StringType Pronunciation of the first name of the user, written in phonetic hiragana or katakana characters.
  yomifirstname?: string | null;
  // Yomi Full Name StringType Pronunciation of the full name of the user, written in phonetic hiragana or katakana characters.
  yomifullname?: string | null;
  // Yomi Last Name StringType Pronunciation of the last name of the user, written in phonetic hiragana or katakana characters.
  yomilastname?: string | null;
  // Yomi Middle Name StringType Pronunciation of the middle name of the user, written in phonetic hiragana or katakana characters.
  yomimiddlename?: string | null;
  // AX ID StringType
  z2t_axid?: string | null;
}
