<?php
declare(strict_types=1);

// WeltNews SDK utility: result_headers

class WeltNewsResultHeaders
{
    public static function call(WeltNewsContext $ctx): ?WeltNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
