# WeltNews SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WeltNewsUtility.registrar = ->(u) {
  u.clean = WeltNewsUtilities::Clean
  u.done = WeltNewsUtilities::Done
  u.make_error = WeltNewsUtilities::MakeError
  u.feature_add = WeltNewsUtilities::FeatureAdd
  u.feature_hook = WeltNewsUtilities::FeatureHook
  u.feature_init = WeltNewsUtilities::FeatureInit
  u.fetcher = WeltNewsUtilities::Fetcher
  u.make_fetch_def = WeltNewsUtilities::MakeFetchDef
  u.make_context = WeltNewsUtilities::MakeContext
  u.make_options = WeltNewsUtilities::MakeOptions
  u.make_request = WeltNewsUtilities::MakeRequest
  u.make_response = WeltNewsUtilities::MakeResponse
  u.make_result = WeltNewsUtilities::MakeResult
  u.make_point = WeltNewsUtilities::MakePoint
  u.make_spec = WeltNewsUtilities::MakeSpec
  u.make_url = WeltNewsUtilities::MakeUrl
  u.param = WeltNewsUtilities::Param
  u.prepare_auth = WeltNewsUtilities::PrepareAuth
  u.prepare_body = WeltNewsUtilities::PrepareBody
  u.prepare_headers = WeltNewsUtilities::PrepareHeaders
  u.prepare_method = WeltNewsUtilities::PrepareMethod
  u.prepare_params = WeltNewsUtilities::PrepareParams
  u.prepare_path = WeltNewsUtilities::PreparePath
  u.prepare_query = WeltNewsUtilities::PrepareQuery
  u.graphql_body = WeltNewsUtilities::GraphqlBody
  u.graphql_errors = WeltNewsUtilities::GraphqlErrors
  u.result_basic = WeltNewsUtilities::ResultBasic
  u.result_body = WeltNewsUtilities::ResultBody
  u.result_headers = WeltNewsUtilities::ResultHeaders
  u.transform_request = WeltNewsUtilities::TransformRequest
  u.transform_response = WeltNewsUtilities::TransformResponse
}
