[webull-api-ts](../README.md) › [Globals](../globals.md) › ["utils/Print"](../modules/_utils_print_.md) › [Print](_utils_print_.print.md)

# Class: Print

Print Class

## Hierarchy

* **Print**

## Index

### Constructors

* [constructor](_utils_print_.print.md#constructor)

### Properties

* [print](_utils_print_.print.md#private-print)

### Methods

* [debug](_utils_print_.print.md#debug)
* [error](_utils_print_.print.md#error)
* [ifPrintEnabled](_utils_print_.print.md#private-ifprintenabled)
* [info](_utils_print_.print.md#info)
* [log](_utils_print_.print.md#log)
* [prefixText](_utils_print_.print.md#private-prefixtext)
* [success](_utils_print_.print.md#success)
* [timestampText](_utils_print_.print.md#private-timestamptext)
* [warn](_utils_print_.print.md#warn)

## Constructors

###  constructor

\+ **new Print**(`args?`: any): *[Print](_utils_print_.print.md)*

*Defined in [utils/Print.ts:19](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

**Returns:** *[Print](_utils_print_.print.md)*

## Properties

### `Private` print

• **print**: *boolean*

*Defined in [utils/Print.ts:19](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L19)*

## Methods

###  debug

▸ **debug**(`value`: any): *any*

*Defined in [utils/Print.ts:109](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L109)*

Debug

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  error

▸ **error**(`value`: any): *any*

*Defined in [utils/Print.ts:81](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L81)*

Error Method

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` ifPrintEnabled

▸ **ifPrintEnabled**(`method`: Function): *any*

*Defined in [utils/Print.ts:121](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L121)*

If print enabled

**Parameters:**

Name | Type |
------ | ------ |
`method` | Function |

**Returns:** *any*

___

###  info

▸ **info**(`value`: any): *any*

*Defined in [utils/Print.ts:49](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L49)*

Info

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

###  log

▸ **log**(`value`: any): *any*

*Defined in [utils/Print.ts:98](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L98)*

Log

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` prefixText

▸ **prefixText**(`prefix`: string, `value`: any): *string*

*Defined in [utils/Print.ts:142](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L142)*

Prefix Text

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | string |
`value` | any |

**Returns:** *string*

___

###  success

▸ **success**(`value`: any): *any*

*Defined in [utils/Print.ts:33](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L33)*

Success

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` timestampText

▸ **timestampText**(`value`: any): *string*

*Defined in [utils/Print.ts:134](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L134)*

Timestamp Text

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string*

___

###  warn

▸ **warn**(`value`: any): *any*

*Defined in [utils/Print.ts:65](https://github.com/edmundpf/webull-api-ts/blob/ecd782b/src/utils/Print.ts#L65)*

Warning

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*
