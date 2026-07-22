# WeltNews SDK utility: make_context
require_relative '../core/context'
module WeltNewsUtilities
  MakeContext = ->(ctxmap, basectx) {
    WeltNewsContext.new(ctxmap, basectx)
  }
end
