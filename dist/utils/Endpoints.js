"use strict";
/**
 * Endpoints class
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Endpoints {
    /**
     * Constructor
     */
    constructor() {
        this.infoUrl = 'https://infoapi.webull.com/api';
        this.optionsUrl = 'https://quoteapi.webullbroker.com/api';
        this.optionsGwUrl = 'https://quotes-gw.webullbroker.com/api';
        this.quotesUrl = 'https://quoteapi.webull.com/api';
        this.securitiesUrl = 'https://securitiesapi.webullbroker.com/api';
        this.tradeUrl = 'https://tradeapi.webulltrade.com/api/trade';
        this.userUrl = 'https://userapi.webull.com/api';
        this.userBrokerUrl = 'https://userapi.webullbroker.com/api';
        this.tradeBrokerUrl = 'https://tradeapi.webullbroker.com/api/trade';
    }
    /**
     * Account
     */
    account(id) {
        return `${this.tradeUrl}/v2/home/${id}`;
    }
    /**
     * Account ID
     */
    accountId() {
        return `${this.tradeUrl}/account/getSecAccountList/v4`;
    }
    /**
     * Login
     */
    login() {
        return `${this.userUrl}/passport/login/v3/account`;
    }
    /**
     * MFA (multi-factor authentification)
     */
    mfa(email, accountType, deviceId, codeType, regionCode) {
        return `${this.userUrl}/passport/verificationCode/sendCode?account=${email}` +
            `&accountType=${accountType}&deviceId=${deviceId}&codeType=${codeType}&regionCode=${regionCode}`;
    }
    /**
     * Orders
     */
    orders(id, dateString, pageSize, createTime) {
        return `${this.tradeUrl}/v2/option/list?secAccountId=${id}&startTime=${dateString}&dateType=ORDER&pageSize=${pageSize}&lastCreateTime0=${createTime}`;
    }
    /**
     * Refresh Token
     */
    refreshToken(token) {
        return `${this.userUrl}/passport/refreshToken?refreshToken=${token}`;
    }
    /**
     * Trade Token
     */
    tradeToken() {
        return `${this.tradeUrl}/login`;
    }
    /**
     * Transfers
     */
    transfers(id) {
        return `${this.tradeBrokerUrl}/asset/${id}/getWebullTransferList`;
    }
}
exports.default = Endpoints;
