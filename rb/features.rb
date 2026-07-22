# WeltNews SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WeltNewsFeatures
  def self.make_feature(name)
    case name
    when "base"
      WeltNewsBaseFeature.new
    when "test"
      WeltNewsTestFeature.new
    else
      WeltNewsBaseFeature.new
    end
  end
end
