<?php
declare(strict_types=1);

// WeltNews SDK utility: result_body

class WeltNewsResultBody
{
    public static function call(WeltNewsContext $ctx): ?WeltNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
