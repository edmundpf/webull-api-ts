import Api from '../'
import chai from 'chai'
const should = chai.should()

/**
 * Api Class
 */

describe('API', function() {
	before(async function() {
		this.timeout(15000)
  })
	it('Is function', function() {
		Api.should.be.a('function')
	})
})