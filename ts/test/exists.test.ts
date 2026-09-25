
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WeltNewsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WeltNewsSDK.test()
    equal(testsdk instanceof WeltNewsSDK, true,
      'WeltNewsSDK.test() must return a client synchronously')
  })

})
