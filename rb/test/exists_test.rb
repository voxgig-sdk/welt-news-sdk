# WeltNews SDK exists test

require "minitest/autorun"
require_relative "../WeltNews_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WeltNewsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
