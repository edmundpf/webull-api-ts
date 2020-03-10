/**
 * API Class
 */
export default class Api {
    headers: any;
    session: any;
    uuid: string;
    username: string;
    deviceId: string;
    accountId: string;
    tradeToken: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiry: string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Login
     */
    login(args?: any): any;
    /**
     * Get Account Info
     */
    getAccount(): Promise<any>;
    /**
     * Get Account Details
     */
    getAccountDetails(): Promise<any>;
    /**
     * Get Positions
     */
    getPositions(): Promise<any>;
    /**
     * Get Open Orders
     */
    getOpenOrders(): Promise<any>;
    /**
     * Get Deposits
     */
    getDeposits(): Promise<any>;
    /**
     * Get Order History
     */
    getOrderHistory(args?: any): Promise<any[]>;
    /**
     * Get Transfer History
     */
    getTransferHistory(): Promise<any[]>;
    /**
     * Get Account History including orders and transfers (only tested with stock and long calls/puts)
     */
    getAccountHistory(args?: any): Promise<any[]>;
    /**
     * Get Device ID
     */
    private getDeviceId;
    /**
     * Get Account ID
     */
    private getAccountId;
    /**
     * Refresh Login Token
     */
    private refreshLogin;
    /**
     * Get Trade Token
     */
    private getTradeToken;
    /**
     * Credentials Prompt
     */
    private credentialsPrompt;
    /**
     * Sleep
     */
    private sleep;
    /**
     * Get Request
     */
    private get;
    /**
     * Post Request
     */
    private post;
    /**
     * Serialize Response
     */
    private serializeResponse;
    /**
     * Get Headers
     */
    private getHeaders;
    /**
     * Check for valid response
     */
    private validResponse;
    /**
     * Error Handler
     */
    private errorHandler;
}
