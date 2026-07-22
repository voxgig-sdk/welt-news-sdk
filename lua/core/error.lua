-- WeltNews SDK error

local WeltNewsError = {}
WeltNewsError.__index = WeltNewsError


function WeltNewsError.new(code, msg, ctx)
  local self = setmetatable({}, WeltNewsError)
  self.is_sdk_error = true
  self.sdk = "WeltNews"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WeltNewsError:error()
  return self.msg
end


function WeltNewsError:__tostring()
  return self.msg
end


return WeltNewsError
