/**
 * Print Class
 */
export default class Print {
    private print;
    constructor(args?: any);
    /**
     * Success
     */
    success(value: any): any;
    /**
     * Info
     */
    info(value: any): any;
    /**
     * Warning
     */
    warn(value: any): any;
    /**
     * Error Method
     */
    error(value: any): any;
    /**
     * Log
     */
    log(value: any): any;
    /**
     * Debug
     */
    debug(value: any): any;
    /**
     * If print enabled
     */
    private ifPrintEnabled;
    /**
     * Timestamp Text
     */
    private timestampText;
    /**
     * Prefix Text
     */
    private prefixText;
}
