
import { Context } from './Context'


class WeltNewsError extends Error {

  isWeltNewsError = true

  sdk = 'WeltNews'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WeltNewsError
}

