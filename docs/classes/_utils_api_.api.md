[webull-api-ts](../README.md) › [Globals](../globals.md) › ["utils/Api"](../modules/_utils_api_.md) › [Api](_utils_api_.api.md)

# Class: Api

API Class

## Hierarchy

* **Api**

## Index

### Constructors

* [constructor](_utils_api_.api.md#constructor)

### Properties

* [accessToken](_utils_api_.api.md#accesstoken)
* [accountId](_utils_api_.api.md#accountid)
* [deviceId](_utils_api_.api.md#deviceid)
* [headers](_utils_api_.api.md#headers)
* [refreshToken](_utils_api_.api.md#refreshtoken)
* [session](_utils_api_.api.md#session)
* [tokenExpiry](_utils_api_.api.md#tokenexpiry)
* [tradeToken](_utils_api_.api.md#tradetoken)
* [username](_utils_api_.api.md#username)
* [uuid](_utils_api_.api.md#uuid)

### Methods

* [credentialsPrompt](_utils_api_.api.md#private-credentialsprompt)
* [errorHandler](_utils_api_.api.md#private-errorhandler)
* [get](_utils_api_.api.md#private-get)
* [getAccount](_utils_api_.api.md#getaccount)
* [getAccountDetails](_utils_api_.api.md#getaccountdetails)
* [getAccountHistory](_utils_api_.api.md#getaccounthistory)
* [getAccountId](_utils_api_.api.md#private-getaccountid)
* [getDeposits](_utils_api_.api.md#getdeposits)
* [getDeviceId](_utils_api_.api.md#private-getdeviceid)
* [getHeaders](_utils_api_.api.md#private-getheaders)
* [getOpenOrders](_utils_api_.api.md#getopenorders)
* [getOrderHistory](_utils_api_.api.md#getorderhistory)
* [getPositions](_utils_api_.api.md#getpositions)
* [getTradeToken](_utils_api_.api.md#private-gettradetoken)
* [getTransferHistory](_utils_api_.api.md#gettransferhistory)
* [login](_utils_api_.api.md#login)
* [post](_utils_api_.api.md#private-post)
* [refreshLogin](_utils_api_.api.md#private-refreshlogin)
* [serializeResponse](_utils_api_.api.md#private-serializeresponse)
* [sleep](_utils_api_.api.md#private-sleep)
* [validResponse](_utils_api_.api.md#private-validresponse)

## Constructors

###  constructor

\+ **new Api**(): *[Api](_utils_api_.api.md)*

*Defined in [utils/Api.ts:48](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L48)*

Constructor

**Returns:** *[Api](_utils_api_.api.md)*

## Properties

###  accessToken

• **accessToken**: *string*

*Defined in [utils/Api.ts:46](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L46)*

___

###  accountId

• **accountId**: *string*

*Defined in [utils/Api.ts:44](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L44)*

___

###  deviceId

• **deviceId**: *string*

*Defined in [utils/Api.ts:43](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L43)*

___

###  headers

• **headers**: *any*

*Defined in [utils/Api.ts:39](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L39)*

___

###  refreshToken

• **refreshToken**: *string*

*Defined in [utils/Api.ts:47](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L47)*

___

###  session

• **session**: *any*

*Defined in [utils/Api.ts:40](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L40)*

___

###  tokenExpiry

• **tokenExpiry**: *string*

*Defined in [utils/Api.ts:48](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L48)*

___

###  tradeToken

• **tradeToken**: *string*

*Defined in [utils/Api.ts:45](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L45)*

___

###  username

• **username**: *string*

*Defined in [utils/Api.ts:42](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L42)*

___

###  uuid

• **uuid**: *string*

*Defined in [utils/Api.ts:41](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L41)*

## Methods

### `Private` credentialsPrompt

▸ **credentialsPrompt**(): *Promise‹Object & Object & Object & Object & Object›*

*Defined in [utils/Api.ts:472](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L472)*

Credentials Prompt

**Returns:** *Promise‹Object & Object & Object & Object & Object›*

___

### `Private` errorHandler

▸ **errorHandler**(`error`: any): *any*

*Defined in [utils/Api.ts:605](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L605)*

Error Handler

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *any*

___

### `Private` get

▸ **get**(`url`: string, `args?`: any): *Promise‹any›*

*Defined in [utils/Api.ts:513](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L513)*

Get Request

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`args?` | any |

**Returns:** *Promise‹any›*

___

###  getAccount

▸ **getAccount**(): *Promise‹any›*

*Defined in [utils/Api.ts:224](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L224)*

Get Account Info

**Returns:** *Promise‹any›*

___

###  getAccountDetails

▸ **getAccountDetails**(): *Promise‹any›*

*Defined in [utils/Api.ts:233](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L233)*

Get Account Details

**Returns:** *Promise‹any›*

___

###  getAccountHistory

▸ **getAccountHistory**(`args?`: any): *Promise‹any[]›*

*Defined in [utils/Api.ts:348](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L348)*

Get Account History including orders and transfers (only tested with stock and long calls/puts)

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *Promise‹any[]›*

___

### `Private` getAccountId

▸ **getAccountId**(): *Promise‹string | false›*

*Defined in [utils/Api.ts:429](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L429)*

Get Account ID

**Returns:** *Promise‹string | false›*

___

###  getDeposits

▸ **getDeposits**(): *Promise‹any›*

*Defined in [utils/Api.ts:272](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L272)*

Get Deposits

**Returns:** *Promise‹any›*

___

### `Private` getDeviceId

▸ **getDeviceId**(): *string*

*Defined in [utils/Api.ts:421](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L421)*

Get Device ID

**Returns:** *string*

___

### `Private` getHeaders

▸ **getHeaders**(`args`: any): *any*

*Defined in [utils/Api.ts:579](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L579)*

Get Headers

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *any*

___

###  getOpenOrders

▸ **getOpenOrders**(): *Promise‹any›*

*Defined in [utils/Api.ts:263](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L263)*

Get Open Orders

**Returns:** *Promise‹any›*

___

###  getOrderHistory

▸ **getOrderHistory**(`args?`: any): *Promise‹any[]›*

*Defined in [utils/Api.ts:281](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L281)*

Get Order History

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *Promise‹any[]›*

___

###  getPositions

▸ **getPositions**(): *Promise‹any›*

*Defined in [utils/Api.ts:254](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L254)*

Get Positions

**Returns:** *Promise‹any›*

___

### `Private` getTradeToken

▸ **getTradeToken**(`tradePin`: string): *Promise‹any›*

*Defined in [utils/Api.ts:455](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L455)*

Get Trade Token

**Parameters:**

Name | Type |
------ | ------ |
`tradePin` | string |

**Returns:** *Promise‹any›*

___

###  getTransferHistory

▸ **getTransferHistory**(): *Promise‹any[]›*

*Defined in [utils/Api.ts:317](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L317)*

Get Transfer History

**Returns:** *Promise‹any[]›*

___

###  login

▸ **login**(`args?`: any): *any*

*Defined in [utils/Api.ts:79](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L79)*

Login

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *any*

___

### `Private` post

▸ **post**(`url`: string, `data`: any, `args?`: any): *Promise‹any›*

*Defined in [utils/Api.ts:536](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L536)*

Post Request

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | any |
`args?` | any |

**Returns:** *Promise‹any›*

___

### `Private` refreshLogin

▸ **refreshLogin**(): *Promise‹any›*

*Defined in [utils/Api.ts:443](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L443)*

Refresh Login Token

**Returns:** *Promise‹any›*

___

### `Private` serializeResponse

▸ **serializeResponse**(`response`: any): *any*

*Defined in [utils/Api.ts:560](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L560)*

Serialize Response

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *any*

___

### `Private` sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

*Defined in [utils/Api.ts:505](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L505)*

Sleep

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*

___

### `Private` validResponse

▸ **validResponse**(`response`: any): *any*

*Defined in [utils/Api.ts:597](https://github.com/edmundpf/webull-api-ts/blob/0df93d7/src/utils/Api.ts#L597)*

Check for valid response

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *any*
