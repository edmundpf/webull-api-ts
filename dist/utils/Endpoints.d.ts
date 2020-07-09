/**
 * Endpoints class
 */
export default class Endpoints {
    infoUrl: string;
    optionsUrl: string;
    optionsGwUrl: string;
    quotesUrl: string;
    securitiesUrl: string;
    tradeUrl: string;
    userUrl: string;
    userBrokerUrl: string;
    tradeBrokerUrl: string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Account
     */
    account(id: string): string;
    /**
     * Account ID
     */
    accountId(): string;
    /**
     * Login
     */
    login(): string;
    /**
     * MFA (multi-factor authentification)
     */
    mfa(email: string, accountType: number, deviceId: string, codeType: number, regionCode: number): string;
    /**
     * Orders
     */
    orders(id: string, dateString: string, pageSize: string, createTime: string): string;
    /**
     * Refresh Token
     */
    refreshToken(token: string): string;
    /**
     * Trade Token
     */
    tradeToken(): string;
    /**
     * Transfers
     */
    transfers(id: string): string;
}
