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
* [requiredValue](_utils_api_.api.md#private-requiredvalue)
* [serializeResponse](_utils_api_.api.md#private-serializeresponse)
* [sleep](_utils_api_.api.md#private-sleep)
* [validEmail](_utils_api_.api.md#private-validemail)
* [validResponse](_utils_api_.api.md#private-validresponse)

## Constructors

###  constructor

\+ **new Api**(): *[Api](_utils_api_.api.md)*

*Defined in [utils/Api.ts:49](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L49)*

Constructor

**Returns:** *[Api](_utils_api_.api.md)*

## Properties

###  accessToken

• **accessToken**: *string*

*Defined in [utils/Api.ts:47](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L47)*

___

###  accountId

• **accountId**: *string*

*Defined in [utils/Api.ts:45](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L45)*

___

###  deviceId

• **deviceId**: *string*

*Defined in [utils/Api.ts:44](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L44)*

___

###  headers

• **headers**: *any*

*Defined in [utils/Api.ts:40](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L40)*

___

###  refreshToken

• **refreshToken**: *string*

*Defined in [utils/Api.ts:48](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L48)*

___

###  session

• **session**: *any*

*Defined in [utils/Api.ts:41](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L41)*

___

###  tokenExpiry

• **tokenExpiry**: *string*

*Defined in [utils/Api.ts:49](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L49)*

___

###  tradeToken

• **tradeToken**: *string*

*Defined in [utils/Api.ts:46](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L46)*

___

###  username

• **username**: *string*

*Defined in [utils/Api.ts:43](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L43)*

___

###  uuid

• **uuid**: *string*

*Defined in [utils/Api.ts:42](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L42)*

## Methods

### `Private` credentialsPrompt

▸ **credentialsPrompt**(): *Promise‹Object & Object & Object & Object & Object›*

*Defined in [utils/Api.ts:510](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L510)*

Credentials Prompt

**Returns:** *Promise‹Object & Object & Object & Object & Object›*

___

### `Private` errorHandler

▸ **errorHandler**(`error`: any): *any*

*Defined in [utils/Api.ts:649](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L649)*

Error Handler

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *any*

___

### `Private` get

▸ **get**(`url`: string, `args?`: any): *Promise‹any›*

*Defined in [utils/Api.ts:555](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L555)*

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

*Defined in [utils/Api.ts:262](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L262)*

Get Account Info

**Returns:** *Promise‹any›*

___

###  getAccountDetails

▸ **getAccountDetails**(): *Promise‹any›*

*Defined in [utils/Api.ts:271](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L271)*

Get Account Details

**Returns:** *Promise‹any›*

___

###  getAccountHistory

▸ **getAccountHistory**(`args?`: any): *Promise‹any[]›*

*Defined in [utils/Api.ts:386](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L386)*

Get Account History including orders and transfers (only tested with stock and long calls/puts)

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *Promise‹any[]›*

___

### `Private` getAccountId

▸ **getAccountId**(): *Promise‹string | false›*

*Defined in [utils/Api.ts:467](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L467)*

Get Account ID

**Returns:** *Promise‹string | false›*

___

###  getDeposits

▸ **getDeposits**(): *Promise‹any›*

*Defined in [utils/Api.ts:310](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L310)*

Get Deposits

**Returns:** *Promise‹any›*

___

### `Private` getDeviceId

▸ **getDeviceId**(): *string*

*Defined in [utils/Api.ts:459](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L459)*

Get Device ID

**Returns:** *string*

___

### `Private` getHeaders

▸ **getHeaders**(`args`: any): *any*

*Defined in [utils/Api.ts:623](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L623)*

Get Headers

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

**Returns:** *any*

___

###  getOpenOrders

▸ **getOpenOrders**(): *Promise‹any›*

*Defined in [utils/Api.ts:301](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L301)*

Get Open Orders

**Returns:** *Promise‹any›*

___

###  getOrderHistory

▸ **getOrderHistory**(`args?`: any): *Promise‹any[]›*

*Defined in [utils/Api.ts:319](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L319)*

Get Order History

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *Promise‹any[]›*

___

###  getPositions

▸ **getPositions**(): *Promise‹any›*

*Defined in [utils/Api.ts:292](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L292)*

Get Positions

**Returns:** *Promise‹any›*

___

### `Private` getTradeToken

▸ **getTradeToken**(`tradePin`: string): *Promise‹any›*

*Defined in [utils/Api.ts:493](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L493)*

Get Trade Token

**Parameters:**

Name | Type |
------ | ------ |
`tradePin` | string |

**Returns:** *Promise‹any›*

___

###  getTransferHistory

▸ **getTransferHistory**(): *Promise‹any[]›*

*Defined in [utils/Api.ts:355](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L355)*

Get Transfer History

**Returns:** *Promise‹any[]›*

___

###  login

▸ **login**(`args?`: any): *any*

*Defined in [utils/Api.ts:80](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L80)*

Login

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *any*

___

### `Private` post

▸ **post**(`url`: string, `data`: any, `args?`: any): *Promise‹any›*

*Defined in [utils/Api.ts:579](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L579)*

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

*Defined in [utils/Api.ts:481](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L481)*

Refresh Login Token

**Returns:** *Promise‹any›*

___

### `Private` requiredValue

▸ **requiredValue**(`text`: string): *true | "Field is required."*

*Defined in [utils/Api.ts:669](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L669)*

Required Value

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *true | "Field is required."*

___

### `Private` serializeResponse

▸ **serializeResponse**(`response`: any): *any*

*Defined in [utils/Api.ts:604](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L604)*

Serialize Response

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *any*

___

### `Private` sleep

▸ **sleep**(`ms`: number): *Promise‹unknown›*

*Defined in [utils/Api.ts:547](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L547)*

Sleep

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹unknown›*

___

### `Private` validEmail

▸ **validEmail**(`text`: string): *true | "Must enter valid email address."*

*Defined in [utils/Api.ts:677](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L677)*

Valid Email

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *true | "Must enter valid email address."*

___

### `Private` validResponse

▸ **validResponse**(`response`: any): *any*

*Defined in [utils/Api.ts:641](https://github.com/edmundpf/webull-api-ts/blob/23edda1/src/utils/Api.ts#L641)*

Check for valid response

**Parameters:**

Name | Type |
------ | ------ |
`response` | any |

**Returns:** *any*
