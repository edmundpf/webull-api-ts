"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
// Colors
const reset = '\u001b[0m';
const black = '\u001b[30m';
const grey = '\u001b[90m';
const green = '\u001b[32m';
const cyan = '\u001b[36m';
const redBackground = '\u001b[41m';
const yellowBackground = '\u001b[43m';
/**
 * Print Class
 */
class Print {
    constructor(args) {
        args = Object.assign({ print: true }, args);
        this.print = args.print;
    }
    /**
     * Success
     */
    success(value) {
        const method = (value) => {
            return console.log(this.prefixText(`${green}✔`, value));
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * Info
     */
    info(value) {
        const method = (value) => {
            return console.info(this.prefixText(`${cyan}ℹ`, value));
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * Warning
     */
    warn(value) {
        const method = (value) => {
            return console.warn(this.prefixText(`${yellowBackground}${black} WARN `, value));
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * Error Method
     */
    error(value) {
        const method = (value) => {
            console.log(this.prefixText(`${redBackground}${black} ERROR `, ''));
            return console.error(value);
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * Log
     */
    log(value) {
        const method = (value) => {
            return console.log(this.timestampText(value));
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * Debug
     */
    debug(value) {
        const method = (value) => {
            this.log('');
            return console.debug(value);
        };
        return this.ifPrintEnabled(method.bind(this, value));
    }
    /**
     * If print enabled
     */
    ifPrintEnabled(method) {
        if (this.print) {
            return method();
        }
        else {
            return undefined;
        }
    }
    /**
     * Timestamp Text
     */
    timestampText(value) {
        return `[${grey} ${date_fns_1.format(new Date(), 'HH:mm:ss')}${reset} ] ${value}`;
    }
    /**
     * Prefix Text
     */
    prefixText(prefix, value) {
        return `${prefix}${reset} ${this.timestampText(value)}`;
    }
}
exports.default = Print;
