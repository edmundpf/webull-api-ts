[webull-api-ts](../README.md) › [Globals](../globals.md) › ["utils/Endpoints"](../modules/_utils_endpoints_.md) › [Endpoints](_utils_endpoints_.endpoints.md)

# Class: Endpoints

Endpoints class

## Hierarchy

* **Endpoints**

## Index

### Constructors

* [constructor](_utils_endpoints_.endpoints.md#constructor)

### Properties

* [infoUrl](_utils_endpoints_.endpoints.md#infourl)
* [optionsGwUrl](_utils_endpoints_.endpoints.md#optionsgwurl)
* [optionsUrl](_utils_endpoints_.endpoints.md#optionsurl)
* [quotesUrl](_utils_endpoints_.endpoints.md#quotesurl)
* [securitiesUrl](_utils_endpoints_.endpoints.md#securitiesurl)
* [tradeBrokerUrl](_utils_endpoints_.endpoints.md#tradebrokerurl)
* [tradeUrl](_utils_endpoints_.endpoints.md#tradeurl)
* [userBrokerUrl](_utils_endpoints_.endpoints.md#userbrokerurl)
* [userUrl](_utils_endpoints_.endpoints.md#userurl)

### Methods

* [account](_utils_endpoints_.endpoints.md#account)
* [accountId](_utils_endpoints_.endpoints.md#accountid)
* [login](_utils_endpoints_.endpoints.md#login)
* [mfa](_utils_endpoints_.endpoints.md#mfa)
* [orders](_utils_endpoints_.endpoints.md#orders)
* [refreshToken](_utils_endpoints_.endpoints.md#refreshtoken)
* [tradeToken](_utils_endpoints_.endpoints.md#tradetoken)
* [transfers](_utils_endpoints_.endpoints.md#transfers)

## Constructors

###  constructor

\+ **new Endpoints**(): *[Endpoints](_utils_endpoints_.endpoints.md)*

*Defined in [utils/Endpoints.ts:15](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L15)*

Constructor

**Returns:** *[Endpoints](_utils_endpoints_.endpoints.md)*

## Properties

###  infoUrl

• **infoUrl**: *string*

*Defined in [utils/Endpoints.ts:7](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L7)*

___

###  optionsGwUrl

• **optionsGwUrl**: *string*

*Defined in [utils/Endpoints.ts:9](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L9)*

___

###  optionsUrl

• **optionsUrl**: *string*

*Defined in [utils/Endpoints.ts:8](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L8)*

___

###  quotesUrl

• **quotesUrl**: *string*

*Defined in [utils/Endpoints.ts:10](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L10)*

___

###  securitiesUrl

• **securitiesUrl**: *string*

*Defined in [utils/Endpoints.ts:11](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L11)*

___

###  tradeBrokerUrl

• **tradeBrokerUrl**: *string*

*Defined in [utils/Endpoints.ts:15](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L15)*

___

###  tradeUrl

• **tradeUrl**: *string*

*Defined in [utils/Endpoints.ts:12](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L12)*

___

###  userBrokerUrl

• **userBrokerUrl**: *string*

*Defined in [utils/Endpoints.ts:14](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L14)*

___

###  userUrl

• **userUrl**: *string*

*Defined in [utils/Endpoints.ts:13](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L13)*

## Methods

###  account

▸ **account**(`id`: string): *string*

*Defined in [utils/Endpoints.ts:37](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L37)*

Account

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *string*

___

###  accountId

▸ **accountId**(): *string*

*Defined in [utils/Endpoints.ts:45](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L45)*

Account ID

**Returns:** *string*

___

###  login

▸ **login**(): *string*

*Defined in [utils/Endpoints.ts:53](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L53)*

Login

**Returns:** *string*

___

###  mfa

▸ **mfa**(`email`: string, `accountType`: number, `deviceId`: string, `codeType`: number, `regionCode`: number): *string*

*Defined in [utils/Endpoints.ts:61](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L61)*

MFA (multi-factor authentification)

**Parameters:**

Name | Type |
------ | ------ |
`email` | string |
`accountType` | number |
`deviceId` | string |
`codeType` | number |
`regionCode` | number |

**Returns:** *string*

___

###  orders

▸ **orders**(`id`: string, `dateString`: string, `pageSize`: string, `createTime`: string): *string*

*Defined in [utils/Endpoints.ts:70](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L70)*

Orders

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`dateString` | string |
`pageSize` | string |
`createTime` | string |

**Returns:** *string*

___

###  refreshToken

▸ **refreshToken**(`token`: string): *string*

*Defined in [utils/Endpoints.ts:78](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L78)*

Refresh Token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *string*

___

###  tradeToken

▸ **tradeToken**(): *string*

*Defined in [utils/Endpoints.ts:86](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L86)*

Trade Token

**Returns:** *string*

___

###  transfers

▸ **transfers**(`id`: string): *string*

*Defined in [utils/Endpoints.ts:94](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Endpoints.ts#L94)*

Transfers

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *string*
