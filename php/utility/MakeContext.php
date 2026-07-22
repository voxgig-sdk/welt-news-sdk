<?php
declare(strict_types=1);

// WeltNews SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WeltNewsMakeContext
{
    public static function call(array $ctxmap, ?WeltNewsContext $basectx): WeltNewsContext
    {
        return new WeltNewsContext($ctxmap, $basectx);
    }
}
