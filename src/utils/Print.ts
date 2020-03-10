import { format } from 'date-fns'

// Colors

const reset = '\u001b[0m'
const black = '\u001b[30m'
const grey = '\u001b[90m'
const green = '\u001b[32m'
const cyan = '\u001b[36m'
const redBackground = '\u001b[41m'
const yellowBackground = '\u001b[43m'

/**
 * Print Class
 */

export default class Print {

	private print: boolean

	constructor(args?: any) {
		args = {
			print: true,
			...args
		}
		this.print = args.print
	}

	/**
	 * Success
	 */

	success(value: any) {
		const method = (value: any) => {
			return console.log(
				this.prefixText(
					`${green}✔`,
					value
				)
			)
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * Info
	 */

	info(value: any) {
		const method = (value: any) => {
			return console.info(
				this.prefixText(
					`${cyan}ℹ`,
					value
				)
			)
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * Warning
	 */

	warn(value: any) {
		const method = (value: any) => {
			return console.warn(
				this.prefixText(
					`${yellowBackground}${black} WARN `,
					value
				)
			)
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * Error Method
	 */

	error(value: any) {
		const method = (value: any) => {
			console.log(
				this.prefixText(
					`${redBackground}${black} ERROR `,
					''
				)
			)
			return console.error(value)
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * Log
	 */

	log(value: any) {
		const method = (value: any) => {
			return console.log(this.timestampText(value))
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * Debug
	 */

	debug(value: any) {
		const method = (value: any) => {
			this.log('')
			return console.debug(value)
		}
		return this.ifPrintEnabled(method.bind(this, value))
	}

	/**
	 * If print enabled
	 */

	private ifPrintEnabled(method: Function) {
		if (this.print) {
			return method()
		}
		else {
			return undefined
		}
	}

	/**
	 * Timestamp Text
	 */

	private timestampText(value: any) {
		return `[${grey} ${format(new Date(), 'HH:mm:ss')}${reset} ] ${value}`
	}

	/**
	 * Prefix Text
	 */

	private prefixText(prefix: string, value: any) {
		return `${prefix}${reset} ${this.timestampText(value)}`
	}

}