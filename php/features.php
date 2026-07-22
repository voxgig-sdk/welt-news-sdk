<?php
declare(strict_types=1);

// WeltNews SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WeltNewsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WeltNewsBaseFeature();
            case "test":
                return new WeltNewsTestFeature();
            default:
                return new WeltNewsBaseFeature();
        }
    }
}
