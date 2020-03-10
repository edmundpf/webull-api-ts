/**
 * Endpoints class
 */

export default class Endpoints {

	infoUrl: string
	optionsUrl: string
	optionsGwUrl: string
	quotesUrl: string
	securitiesUrl: string
	tradeUrl: string
	userUrl: string
	userBrokerUrl: string
	tradeBrokerUrl: string

	/**
	 * Constructor
	 */

	constructor() {
		this.infoUrl = 'https://infoapi.webull.com/api'
		this.optionsUrl = 'https://quoteapi.webullbroker.com/api'
		this.optionsGwUrl = 'https://quotes-gw.webullbroker.com/api'
		this.quotesUrl = 'https://quoteapi.webull.com/api'
		this.securitiesUrl = 'https://securitiesapi.webullbroker.com/api'
		this.tradeUrl = 'https://tradeapi.webulltrade.com/api/trade'
		this.userUrl = 'https://userapi.webull.com/api'
		this.userBrokerUrl = 'https://userapi.webullbroker.com/api'
		this.tradeBrokerUrl = 'https://tradeapi.webullbroker.com/api/trade'
	}

	/**
	 * Account
	 */

	account(id: string) {
		return `${this.tradeUrl}/v2/home/${id}`
	}

	/**
	 * Account ID
	 */

	accountId() {
		return `${this.tradeUrl}/account/getSecAccountList/v4`
	}

	/**
	 * Login
	 */

	login() {
		return `${this.userBrokerUrl}/passport/login/account`
	}

	/**
	 * Orders
	 */

	orders(id: string, dateString: string, pageSize: string, createTime: string) {
		return `${this.tradeUrl}/v2/option/list?secAccountId=${id}&startTime=${dateString}&dateType=ORDER&pageSize=${pageSize}&lastCreateTime0=${createTime}`
	}

	/**
	 * Refresh Token
	 */

	refreshToken(token: string) {
		return `${this.userUrl}/passport/refreshToken?refreshToken=${token}`
	}

	/**
	 * Trade Token
	 */

	tradeToken() {
		return `${this.tradeUrl}/login`
	}

	/**
	 * Transfers
	 */

	transfers(id: string) {
		return `${this.tradeBrokerUrl}/asset/${id}/getWebullTransferList`
	}

}