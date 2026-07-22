<?php
declare(strict_types=1);

// WeltNews SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WeltNewsUtility::setRegistrar(function (WeltNewsUtility $u): void {
    $u->clean = [WeltNewsClean::class, 'call'];
    $u->done = [WeltNewsDone::class, 'call'];
    $u->make_error = [WeltNewsMakeError::class, 'call'];
    $u->feature_add = [WeltNewsFeatureAdd::class, 'call'];
    $u->feature_hook = [WeltNewsFeatureHook::class, 'call'];
    $u->feature_init = [WeltNewsFeatureInit::class, 'call'];
    $u->fetcher = [WeltNewsFetcher::class, 'call'];
    $u->make_fetch_def = [WeltNewsMakeFetchDef::class, 'call'];
    $u->make_context = [WeltNewsMakeContext::class, 'call'];
    $u->make_options = [WeltNewsMakeOptions::class, 'call'];
    $u->make_request = [WeltNewsMakeRequest::class, 'call'];
    $u->make_response = [WeltNewsMakeResponse::class, 'call'];
    $u->make_result = [WeltNewsMakeResult::class, 'call'];
    $u->make_point = [WeltNewsMakePoint::class, 'call'];
    $u->make_spec = [WeltNewsMakeSpec::class, 'call'];
    $u->make_url = [WeltNewsMakeUrl::class, 'call'];
    $u->param = [WeltNewsParam::class, 'call'];
    $u->prepare_auth = [WeltNewsPrepareAuth::class, 'call'];
    $u->prepare_body = [WeltNewsPrepareBody::class, 'call'];
    $u->prepare_headers = [WeltNewsPrepareHeaders::class, 'call'];
    $u->prepare_method = [WeltNewsPrepareMethod::class, 'call'];
    $u->prepare_params = [WeltNewsPrepareParams::class, 'call'];
    $u->prepare_path = [WeltNewsPreparePath::class, 'call'];
    $u->prepare_query = [WeltNewsPrepareQuery::class, 'call'];
    $u->result_basic = [WeltNewsResultBasic::class, 'call'];
    $u->result_body = [WeltNewsResultBody::class, 'call'];
    $u->result_headers = [WeltNewsResultHeaders::class, 'call'];
    $u->transform_request = [WeltNewsTransformRequest::class, 'call'];
    $u->transform_response = [WeltNewsTransformResponse::class, 'call'];
});
