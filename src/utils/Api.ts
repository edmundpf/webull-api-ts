import md5 from 'md5'
import axios from 'axios'
import Print from './Print'
import inquirer from 'inquirer'
import { format } from 'date-fns'
import { uuid } from 'uuidv4'
import Store from 'json-config-ts'
import { serializeError } from 'serialize-error'
import Endpoints from './Endpoints'
import {
	defaultData,
	passwordHash,
	defaultPageSize
} from './values'
const packageInfo = require('../../package.json')

// Init Store

const store = new Store({
	name: 'webull',
	defaultData: defaultData,
	encryptedFields: Object.keys(defaultData),
})

// Init Endpoints

const endpoints = new Endpoints()

// Init Print

const print = new Print()

/**
 * API Class
 */

export default class Api {

	headers: any
	session: any
	uuid: string
	username: string
	deviceId: string
	accountId: string
	tradeToken: string
	accessToken: string
	refreshToken: string
	tokenExpiry: string

	/**
	 * Constructor
	 */

	constructor() {
		this.uuid = ''
		this.username = ''
		this.deviceId = ''
		this.accountId = ''
		this.tradeToken = ''
		this.accessToken = ''
		this.refreshToken = ''
		this.tokenExpiry = ''
		this.headers = {
			Accept: '*/*',
			'Accept-Encoding': 'gzip, deflate',
			'Content-Type': 'application/json',
		}
		this.session = axios.create({
			timeout: 10000,
			headers: this.headers,
		})
		print.success(`Started Webull JS API v${packageInfo.version}.`)
	}

	/**
	 * Login
	 */

	async login(args?: any) {
		args = {
			reset: false,
			retries: 0,
			...args,
		}
		if (args.retries >= 4) {
			print.warn('Could not login after 3 retries, will exit.')
			return process.exit(0)
		}
		let username: string = ''
		let password: string = ''
		let tradePin: string = ''
		let deviceId: string = ''
		let hashedPassword: string = ''
		let authResponse: any = null
		let authData: any = {}
		const retryLogin = async (message: string, response?: any) => {
			if (response != null && response.msg != null) {
				print.log(response.msg)
			}
			print.warn(`${message}, please try again.`)
			store.write({
				...defaultData,
				...store.data,
				tradeToken: '',
				accessToken: '',
				refreshToken: '',
				tokenExpiry: '',
			})
			return await this.login({
				reset: args.reset,
				retries: args.retries + 1
			})
		}
		if (args.reset) {
			store.write(defaultData)
		}
		if (args.retries > 0 && store.data.username != '') {
				print.info('Sleeping 3 seconds before trying again.')
				await this.sleep(3000)
		}
		if ([store.data.username, store.data.password, store.data.tradePin, store.data.deviceId].some((item) => item == '')) {
			print.info('Please enter your credentials.')
			const credentials = await this.credentialsPrompt()
			username = credentials.username
			password = credentials.password
			tradePin = credentials.tradePin
			deviceId = this.getDeviceId()
		}
		else {
			username = store.data.username
			password = store.data.password
			tradePin = store.data.tradePin
			deviceId = store.data.deviceId
		}
		hashedPassword = md5(passwordHash + password)
		if (store.data.tokenExpiry == '' || new Date(Date.now() - 5000).toISOString() >= new Date(store.data.tokenExpiry).toISOString()) {
			print.info('Getting new access token.')
			authResponse = await this.post(
				endpoints.login(),
				{
					account: username,
					pwd: hashedPassword,
					deviceId: deviceId,
					regionId: 1,
					accountType: 2,
				},
				{ noHeaders: true }
			)
			authData = authResponse.data
		}
		else {
			print.info('Refreshing access token.')
			this.deviceId = store.data.deviceId
			this.accessToken = store.data.accessToken
			this.refreshToken = store.data.refreshToken
			authResponse = await this.refreshLogin()
			authData = authResponse
		}
		if (this.validResponse(authResponse)) {
			this.uuid = authData.uuid || store.data.uuid
			this.username = username
			this.deviceId = deviceId
			this.accessToken = authData.accessToken
			this.refreshToken = authData.refreshToken
			this.tokenExpiry = authData.tokenExpireTime
			if (store.data.accountId == '') {
				const accountId = await this.getAccountId()
				if (!accountId) {
					return await retryLogin('Could not get account ID', accountId)
				}
				else {
					this.accountId = accountId
				}
			}
			else {
				this.accountId = store.data.accountId
			}
			const tradeToken = await this.getTradeToken(tradePin)
			if (!tradeToken) {
				return await retryLogin('Could not get trade token', tradeToken)
			}
			else {
				this.tradeToken = tradeToken
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
				})
				print.info('Webull configuration saved.')
			}
			else {
				store.write({
					...store.data,
					uuid: this.uuid,
					deviceId: this.deviceId,
					tradeToken: this.tradeToken,
					accessToken: this.accessToken,
					refreshToken: this.refreshToken,
					tokenExpiry: this.tokenExpiry,
				})
				print.info('Webull configuration updated.')
			}
			print.success(`${this.username} logged in.`)
			return true
		}
		else {
			return await retryLogin('Login was unsuccessful', authResponse)
		}
	}

	/**
	 * Get Account Info
	 */

	async getAccount() {
		const response = await this.get(endpoints.account(this.accountId))
		return response
	}

	/**
	 * Get Account Details
	 */

	async getAccountDetails() {
		const data = await this.getAccount()
		let accountDetails: any = {
			accountType: data.accountType || '',
			currency: data.currency || '',
			pdt: data.pdt != null ? data.pdt : false,
			warning: data.warning != null ? data.warning : false,
			netLiquidation: Number(data.netLiquidation) || 0,
			unrealizedProfitLoss: Number(data.unrealizedProfitLoss) || 0,
			unrealizedProfitLossBase: Number(data.unrealizedProfitLossBase) || 0,
		}
		for (let detail of data.accountMembers) {
			accountDetails[detail.key] = Number(detail.value) || 0
		}
		return accountDetails
	}

	/**
	 * Get Positions
	 */

	async getPositions() {
		const data = await this.getAccount()
		return data.positions
	}

	/**
	 * Get Open Orders
	 */

	async getOpenOrders() {
		const data = await this.getAccount()
		return data.openOrders
	}

	/**
	 * Get Deposits
	 */

	async getDeposits() {
		const data = await this.getAccount()
		return data.deposits
	}

	/**
	 * Get Order History
	 */

	async getOrderHistory(args?: any) {
		args = {
			dateString: '1970-01-01',
			...args,
		}
		let orders: Array<any> = []
		let createTime: string = String(0)
		let hasMaxRecords: boolean = true
		while (hasMaxRecords) {
			const response = await this.get(
				endpoints.orders(
					this.accountId,
					format(new Date(args.dateString), 'yyyy-MM-dd'),
					String(defaultPageSize),
					createTime
				),
				{
					time: true,
					tradeToken: true,
				}
			)
			orders = [...orders, ...response.data]
			if (response.data.length >= defaultPageSize) {
				createTime = String(orders[orders.length - 1].orders[0].createTime0)
			}
			else {
				hasMaxRecords = false
			}
		}
		return orders
	}

	/**
	 * Get Transfer History
	 */

	async getTransferHistory() {
		let transfers: Array<any> = []
		let lastRecordId: string = String(0)
		let hasMaxRecords: boolean = true
		while (hasMaxRecords) {
			const response = await this.post(
				endpoints.transfers(this.accountId),
				{
					pageSize: defaultPageSize,
					lastRecordId: lastRecordId
				},
				{
					time: true,
					tradeToken: true,
				}
			)
			transfers = [...transfers, ...response.data]
			if (response.data.length >= defaultPageSize) {
				lastRecordId = String(transfers[transfers.length - 1].id)
			}
			else {
				hasMaxRecords = false
			}
		}
		return transfers
	}

	/**
	 * Get Account History including orders and transfers (only tested with stock and long calls/puts)
	 */

	async getAccountHistory(args?: any) {
		const orders = await this.getOrderHistory(args)
		const transfers = await this.getTransferHistory()
		const details: Array<any> = []
		const defaultRecord: any = {
			broker: 'Webull',
			account: this.username,
			type: '',
			direction: '',
			date: '',
			ticker: '',
			strategy: '',
			amount: 0,
			quantity: 0,
		}
		const defaultLeg: any = {
			price: 0,
			quantity: 0,
			strike: 0,
			type: '',
			expiration: '',
			side: '',
		}
		for (let order of orders) {
			for (let leg of order.orders) {
				if (leg.statusCode == 'Filled') {
					let legs: Array<any> = []
					let type: string = order.comboTickerType.toLowerCase()
					if (type == 'option') {
						legs = [{
							...defaultLeg,
							price: Number(leg.avgFilledPrice),
							quantity: Number(leg.filledQuantity),
							strike: Number(leg.optionExercisePrice),
							type: leg.optionType,
							expiration: leg.optionExpireDate,
							side: leg.action.toLowerCase()
						}]
					}
					details.push({
						...defaultRecord,
						type: type,
						direction: leg.action == 'BUY' ? 'debit' : 'credit',
						date: new Date(leg.filledTime0).toISOString(),
						ticker: leg.symbol,
						strategy: leg.optionType != null ? `long_${leg.optionType}` : '',
						amount: Number(leg.filledValue),
						quantity: Number(leg.filledQuantity),
						legs: legs,
					})
				}
			}
		}
		for (let transfer of transfers) {
			if (transfer.status == 'COMPLETED') {
				details.push({
					...defaultRecord,
					type: 'transfer',
					direction: transfer.direction == 'IN' ? 'credit' : 'debit',
					date: new Date(transfer.updateTime).toISOString(),
					amount: transfer.amount,
					legs: []
				})
			}
		}
		details.sort((a, b) => a.date > b.date ? -1 : 1)
		return details
	}

	/**
	 * Get Device ID
	 */

	private getDeviceId() {
		return uuid().replace(/-/g, '')
	}

	/**
	 * Get Account ID
	 */

	private async getAccountId() {
		const response = await this.get(endpoints.accountId())
		if (this.validResponse(response)) {
			return String(response.data[0].secAccountId)
		}
		else {
			return false
		}
	}

	/**
	 * Refresh Login Token
	 */

	private async refreshLogin() {
		const response = await this.post(
			endpoints.refreshToken(this.refreshToken),
			{ refreshToken: this.refreshToken }
		)
		return response
	}

	/**
	 * Get Trade Token
	 */

	private async getTradeToken(tradePin: string) {
		const response = await this.post(
			endpoints.tradeToken(),
			{ pwd: md5(passwordHash + tradePin) },
		)
		if (this.validResponse(response)) {
			return response.data.tradeToken
		}
		else {
			return false
		}
	}

	/**
	 * Credentials Prompt
	 */

	private async credentialsPrompt() {
		const requiredVal = (text: string) => {
			return text.length > 0 ? true : 'Field is required.'
		}
		const result = await inquirer.prompt([
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
		])
		return result
	}

	/**
	 * Sleep
	 */

	private sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	/**
	 * Get Request
	 */

	private async get(url: string, args?: any) {
		try {
			args = {
				time: false,
				tradeToken: false,
				noHeaders: false,
				...args,
			}
			const response = await this.session.get(
				url,
				args.noHeaders ? null : { headers: this.getHeaders(args) }
			)
			return this.serializeResponse(response)
		}
		catch (error) {
			this.errorHandler(error)
		}
	}

	/**
	 * Post Request
	 */

	private async post(url: string, data: any, args?: any) {
		try {
			args = {
				time: false,
				tradeToken: false,
				noHeaders: false,
				...args,
			}
			const response = await this.session.post(
				url,
				data,
				args.noHeaders ? null : { headers: this.getHeaders(args) }
			)
			return this.serializeResponse(response)
		}
		catch (error) {
			this.errorHandler(error)
		}
	}

	/**
	 * Serialize Response
	 */

	private serializeResponse(response: any) {
		if (Array.isArray(response.data)) {
			return {
				success: true,
				data: response.data
			}
		}
		else {
			return {
				success: true,
				...response.data
			}
		}
	}

	/**
	 * Get Headers
	 */

	private getHeaders(args: any) {
		const headers: any = {
			did: this.deviceId,
			access_token: this.accessToken,
		}
		if (args.time) {
			headers.t_time = String(new Date().getTime())
		}
		if (args.tradeToken) {
			headers.t_token = this.tradeToken
		}
		return headers
	}

	/**
	 * Check for valid response
	 */

	private validResponse(response: any) {
		return (response != null && !response.isError && response.success)
	}

	/**
	 * Error Handler
	 */

	private errorHandler(error: any) {
		print.error(error)
		if (error.response != null && error.response.data != null) {
			return error.response.data
		}
		else {
			return {
				...serializeError(error),
				isError: true,
			}
		}
	}

}