<?php
declare(strict_types=1);

// Typed models for the WeltNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Article entity data model. */
class Article
{
    public ?string $author = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $published_at = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Article#list. */
class ArticleListMatch
{
    public ?string $author = null;
    public ?string $category = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?string $published_at = null;
    public ?string $title = null;
    public ?string $url = null;
}

