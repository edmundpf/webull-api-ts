"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const axios_1 = __importDefault(require("axios"));
const Print_1 = __importDefault(require("./Print"));
const inquirer_1 = __importDefault(require("inquirer"));
const date_fns_1 = require("date-fns");
const uuidv4_1 = require("uuidv4");
const json_config_ts_1 = __importDefault(require("json-config-ts"));
const serialize_error_1 = require("serialize-error");
const Endpoints_1 = __importDefault(require("./Endpoints"));
const values_1 = require("./values");
const packageInfo = require('../../package.json');
// Init Store
const store = new json_config_ts_1.default({
    name: 'webull',
    defaultData: values_1.defaultData,
    encryptedFields: Object.keys(values_1.defaultData),
});
// Init Endpoints
const endpoints = new Endpoints_1.default();
// Init Print
const print = new Print_1.default();
/**
 * API Class
 */
class Api {
    /**
     * Constructor
     */
    constructor() {
        this.uuid = '';
        this.username = '';
        this.deviceId = '';
        this.accountId = '';
        this.tradeToken = '';
        this.accessToken = '';
        this.refreshToken = '';
        this.tokenExpiry = '';
        this.headers = {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        };
        this.session = axios_1.default.create({
            timeout: 10000,
            headers: this.headers,
        });
        print.success(`Started Webull JS API v${packageInfo.version}.`);
    }
    /**
     * Login
     */
    login(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = Object.assign({ reset: false, retries: 0 }, args);
            if (args.retries >= 4) {
                print.warn('Could not login after 3 retries, will exit.');
                return process.exit(0);
            }
            let username = '';
            let password = '';
            let tradePin = '';
            let deviceId = '';
            let hashedPassword = '';
            let authResponse = null;
            let authData = {};
            const retryLogin = (message, response) => __awaiter(this, void 0, void 0, function* () {
                if (response != null && response.msg != null) {
                    print.log(response.msg);
                }
                print.warn(`${message}, please try again.`);
                store.write(Object.assign(Object.assign(Object.assign({}, values_1.defaultData), store.data), { tradeToken: '', accessToken: '', refreshToken: '', tokenExpiry: '' }));
                return yield this.login({
                    reset: args.reset,
                    retries: args.retries + 1
                });
            });
            if (args.reset) {
                store.write(values_1.defaultData);
            }
            if (args.retries > 0 && store.data.username != '') {
                print.info('Sleeping 3 seconds before trying again.');
                yield this.sleep(3000);
            }
            if ([store.data.username, store.data.password, store.data.tradePin, store.data.deviceId].some((item) => item == '')) {
                print.info('Please enter your credentials.');
                const credentials = yield this.credentialsPrompt();
                username = credentials.username;
                password = credentials.password;
                tradePin = credentials.tradePin;
                deviceId = this.getDeviceId();
            }
            else {
                username = store.data.username;
                password = store.data.password;
                tradePin = store.data.tradePin;
                deviceId = store.data.deviceId;
            }
            hashedPassword = md5_1.default(values_1.passwordHash + password);
            if (store.data.tokenExpiry == '' || new Date(Date.now() - 5000).toISOString() >= new Date(store.data.tokenExpiry).toISOString()) {
                print.info('Getting new access token.');
                authResponse = yield this.post(endpoints.login(), {
                    account: username,
                    pwd: hashedPassword,
                    deviceId: deviceId,
                    regionId: 1,
                    accountType: 2,
                }, { noHeaders: true });
                authData = authResponse.data;
            }
            else {
                print.info('Refreshing access token.');
                this.deviceId = store.data.deviceId;
                this.accessToken = store.data.accessToken;
                this.refreshToken = store.data.refreshToken;
                authResponse = yield this.refreshLogin();
                authData = authResponse;
            }
            if (this.validResponse(authResponse)) {
                this.uuid = authData.uuid || store.data.uuid;
                this.username = username;
                this.deviceId = deviceId;
                this.accessToken = authData.accessToken;
                this.refreshToken = authData.refreshToken;
                this.tokenExpiry = authData.tokenExpireTime;
                if (store.data.accountId == '') {
                    const accountId = yield this.getAccountId();
                    if (!accountId) {
                        return yield retryLogin('Could not get account ID', accountId);
                    }
                    else {
                        this.accountId = accountId;
                    }
                }
                else {
                    this.accountId = store.data.accountId;
                }
                const tradeToken = yield this.getTradeToken(tradePin);
                if (!tradeToken) {
                    return yield retryLogin('Could not get trade token', tradeToken);
                }
                else {
                    this.tradeToken = tradeToken;
                }
                if (this.username != store.data.username) {
                    store.write({
                        uuid: this.uuid,
                        username: this.username,
                        password: password,
                        tradePin: tradePin,
                        deviceId: this.deviceId,
                        accountId: this.accountId,
                        tradeToken: this.tradeToken,
                        accessToken: this.accessToken,
                        refreshToken: this.refreshToken,
                        tokenExpiry: this.tokenExpiry,
                    });
                    print.info('Webull configuration saved.');
                }
                else {
                    store.write(Object.assign(Object.assign({}, store.data), { uuid: this.uuid, deviceId: this.deviceId, tradeToken: this.tradeToken, accessToken: this.accessToken, refreshToken: this.refreshToken, tokenExpiry: this.tokenExpiry }));
                    print.info('Webull configuration updated.');
                }
                print.success(`${this.username} logged in.`);
                return true;
            }
            else {
                return yield retryLogin('Login was unsuccessful', authResponse);
            }
        });
    }
    /**
     * Get Account Info
     */
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(endpoints.account(this.accountId));
            return response;
        });
    }
    /**
     * Get Account Details
     */
    getAccountDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getAccount();
            let accountDetails = {
                accountType: data.accountType || '',
                currency: data.currency || '',
                pdt: data.pdt != null ? data.pdt : false,
                warning: data.warning != null ? data.warning : false,
                netLiquidation: Number(data.netLiquidation) || 0,
                unrealizedProfitLoss: Number(data.unrealizedProfitLoss) || 0,
                unrealizedProfitLossBase: Number(data.unrealizedProfitLossBase) || 0,
            };
            for (let detail of data.accountMembers) {
                accountDetails[detail.key] = Number(detail.value) || 0;
            }
            return accountDetails;
        });
    }
    /**
     * Get Positions
     */
    getPositions() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getAccount();
            return data.positions;
        });
    }
    /**
     * Get Open Orders
     */
    getOpenOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getAccount();
            return data.openOrders;
        });
    }
    /**
     * Get Deposits
     */
    getDeposits() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getAccount();
            return data.deposits;
        });
    }
    /**
     * Get Order History
     */
    getOrderHistory(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args = Object.assign({ dateString: '1970-01-01' }, args);
            let orders = [];
            let createTime = String(0);
            let hasMaxRecords = true;
            while (hasMaxRecords) {
                const response = yield this.get(endpoints.orders(this.accountId, date_fns_1.format(new Date(args.dateString), 'yyyy-MM-dd'), String(values_1.defaultPageSize), createTime), {
                    time: true,
                    tradeToken: true,
                });
                orders = [...orders, ...response.data];
                if (response.data.length >= values_1.defaultPageSize) {
                    createTime = String(orders[orders.length - 1].orders[0].createTime0);
                }
                else {
                    hasMaxRecords = false;
                }
            }
            return orders;
        });
    }
    /**
     * Get Transfer History
     */
    getTransferHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            let transfers = [];
            let lastRecordId = String(0);
            let hasMaxRecords = true;
            while (hasMaxRecords) {
                const response = yield this.post(endpoints.transfers(this.accountId), {
                    pageSize: values_1.defaultPageSize,
                    lastRecordId: lastRecordId
                }, {
                    time: true,
                    tradeToken: true,
                });
                transfers = [...transfers, ...response.data];
                if (response.data.length >= values_1.defaultPageSize) {
                    lastRecordId = String(transfers[transfers.length - 1].id);
                }
                else {
                    hasMaxRecords = false;
                }
            }
            return transfers;
        });
    }
    /**
     * Get Account History including orders and transfers (only tested with stock and long calls/puts)
     */
    getAccountHistory(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.getOrderHistory(args);
            const transfers = yield this.getTransferHistory();
            const details = [];
            const defaultRecord = {
                broker: 'Webull',
                account: this.username,
                type: '',
                direction: '',
                date: '',
                ticker: '',
                strategy: '',
                amount: 0,
                quantity: 0,
            };
            const defaultLeg = {
                price: 0,
                quantity: 0,
                strike: 0,
                type: '',
                expiration: '',
                side: '',
            };
            for (let order of orders) {
                for (let leg of order.orders) {
                    if (leg.statusCode == 'Filled') {
                        let legs = [];
                        let type = order.comboTickerType.toLowerCase();
                        if (type == 'option') {
                            legs = [Object.assign(Object.assign({}, defaultLeg), { price: Number(leg.avgFilledPrice), quantity: Number(leg.filledQuantity), strike: Number(leg.optionExercisePrice), type: leg.optionType, expiration: leg.optionExpireDate, side: leg.action.toLowerCase() })];
                        }
                        details.push(Object.assign(Object.assign({}, defaultRecord), { type: type, direction: leg.action == 'BUY' ? 'debit' : 'credit', date: new Date(leg.filledTime0).toISOString(), ticker: leg.symbol, strategy: leg.optionType != null ? `long_${leg.optionType}` : '', amount: Number(leg.filledValue), quantity: Number(leg.filledQuantity), legs: legs }));
                    }
                }
            }
            for (let transfer of transfers) {
                if (transfer.status == 'COMPLETED') {
                    details.push(Object.assign(Object.assign({}, defaultRecord), { type: 'transfer', direction: transfer.direction == 'IN' ? 'credit' : 'debit', date: new Date(transfer.updateTime).toISOString(), amount: transfer.amount, legs: [] }));
                }
            }
            details.sort((a, b) => a.date > b.date ? -1 : 1);
            return details;
        });
    }
    /**
     * Get Device ID
     */
    getDeviceId() {
        return uuidv4_1.uuid().replace(/-/g, '');
    }
    /**
     * Get Account ID
     */
    getAccountId() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(endpoints.accountId());
            if (this.validResponse(response)) {
                return String(response.data[0].secAccountId);
            }
            else {
                return false;
            }
        });
    }
    /**
     * Refresh Login Token
     */
    refreshLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post(endpoints.refreshToken(this.refreshToken), { refreshToken: this.refreshToken });
            return response;
        });
    }
    /**
     * Get Trade Token
     */
    getTradeToken(tradePin) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.post(endpoints.tradeToken(), { pwd: md5_1.default(values_1.passwordHash + tradePin) });
            if (this.validResponse(response)) {
                return response.data.tradeToken;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Credentials Prompt
     */
    credentialsPrompt() {
        return __awaiter(this, void 0, void 0, function* () {
            const requiredVal = (text) => {
                return text.length > 0 ? true : 'Field is required.';
            };
            const result = yield inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'username',
                    validate: requiredVal,
                    message: 'Enter username:',
                },
                {
                    type: 'password',
                    name: 'password',
                    mask: true,
                    validate: requiredVal,
                    message: 'Enter password:',
                },
                {
                    type: 'password',
                    name: 'tradePin',
                    mask: true,
                    validate: requiredVal,
                    message: 'Enter trading pin:',
                },
            ]);
            return result;
        });
    }
    /**
     * Sleep
     */
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    /**
     * Get Request
     */
    get(url, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                args = Object.assign({ time: false, tradeToken: false, noHeaders: false }, args);
                const response = yield this.session.get(url, args.noHeaders ? null : { headers: this.getHeaders(args) });
                return this.serializeResponse(response);
            }
            catch (error) {
                this.errorHandler(error);
            }
        });
    }
    /**
     * Post Request
     */
    post(url, data, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                args = Object.assign({ time: false, tradeToken: false, noHeaders: false }, args);
                const response = yield this.session.post(url, data, args.noHeaders ? null : { headers: this.getHeaders(args) });
                return this.serializeResponse(response);
            }
            catch (error) {
                this.errorHandler(error);
            }
        });
    }
    /**
     * Serialize Response
     */
    serializeResponse(response) {
        if (Array.isArray(response.data)) {
            return {
                success: true,
                data: response.data
            };
        }
        else {
            return Object.assign({ success: true }, response.data);
        }
    }
    /**
     * Get Headers
     */
    getHeaders(args) {
        const headers = {
            did: this.deviceId,
            access_token: this.accessToken,
        };
        if (args.time) {
            headers.t_time = String(new Date().getTime());
        }
        if (args.tradeToken) {
            headers.t_token = this.tradeToken;
        }
        return headers;
    }
    /**
     * Check for valid response
     */
    validResponse(response) {
        return (response != null && !response.isError && response.success);
    }
    /**
     * Error Handler
     */
    errorHandler(error) {
        print.error(error);
        if (error.response != null && error.response.data != null) {
            return error.response.data;
        }
        else {
            return Object.assign(Object.assign({}, serialize_error_1.serializeError(error)), { isError: true });
        }
    }
}
exports.default = Api;
