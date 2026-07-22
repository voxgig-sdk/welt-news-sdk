<?php
declare(strict_types=1);

// WeltNews SDK utility: prepare_body

class WeltNewsPrepareBody
{
    public static function call(WeltNewsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
