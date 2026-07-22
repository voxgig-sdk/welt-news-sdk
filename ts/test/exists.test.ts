
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WeltNewsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WeltNewsSDK.test()
    equal(null !== testsdk, true)
  })

})
