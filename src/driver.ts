import Api from './'

/**
 * Driver
 */

async function driver() {
	const api = new Api()
	await api.login()
}

/**
 * Run
 */

driver()