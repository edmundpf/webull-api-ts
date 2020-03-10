[webull-api-ts](../README.md) › [Globals](../globals.md) › ["utils/Api"](_utils_api_.md)

# External module: "utils/Api"

## Index

### Classes

* [Api](../classes/_utils_api_.api.md)

### Variables

* [endpoints](_utils_api_.md#const-endpoints)
* [packageInfo](_utils_api_.md#const-packageinfo)
* [print](_utils_api_.md#const-print)
* [store](_utils_api_.md#const-store)

## Variables

### `Const` endpoints

• **endpoints**: *[Endpoints](../classes/_utils_endpoints_.endpoints.md)‹›* = new Endpoints()

*Defined in [utils/Api.ts:27](https://github.com/edmundpf/webull-api-ts/blob/6b2fcd5/src/utils/Api.ts#L27)*

___

### `Const` packageInfo

• **packageInfo**: *any* = require('../../package.json')

*Defined in [utils/Api.ts:15](https://github.com/edmundpf/webull-api-ts/blob/6b2fcd5/src/utils/Api.ts#L15)*

___

### `Const` print

• **print**: *[Print](../classes/_utils_print_.print.md)‹›* = new Print()

*Defined in [utils/Api.ts:31](https://github.com/edmundpf/webull-api-ts/blob/6b2fcd5/src/utils/Api.ts#L31)*

___

### `Const` store

• **store**: *Store‹›* = new Store({
	name: 'webull',
	defaultData: defaultData,
	encryptedFields: Object.keys(defaultData),
})

*Defined in [utils/Api.ts:19](https://github.com/edmundpf/webull-api-ts/blob/6b2fcd5/src/utils/Api.ts#L19)*
