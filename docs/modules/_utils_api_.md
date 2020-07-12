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

*Defined in [utils/Api.ts:28](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Api.ts#L28)*

___

### `Const` packageInfo

• **packageInfo**: *any* = require('../../package.json')

*Defined in [utils/Api.ts:16](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Api.ts#L16)*

___

### `Const` print

• **print**: *[Print](../classes/_utils_print_.print.md)‹›* = new Print()

*Defined in [utils/Api.ts:32](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Api.ts#L32)*

___

### `Const` store

• **store**: *Store‹›* = new Store({
	name: 'webull',
	defaultData: defaultData,
	encryptedFields: Object.keys(defaultData),
})

*Defined in [utils/Api.ts:20](https://github.com/edmundpf/webull-api-ts/blob/6bc4094/src/utils/Api.ts#L20)*
