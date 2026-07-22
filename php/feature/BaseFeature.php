<?php
declare(strict_types=1);

// WeltNews SDK base feature

class WeltNewsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WeltNewsContext $ctx, array $options): void {}
    public function PostConstruct(WeltNewsContext $ctx): void {}
    public function PostConstructEntity(WeltNewsContext $ctx): void {}
    public function SetData(WeltNewsContext $ctx): void {}
    public function GetData(WeltNewsContext $ctx): void {}
    public function GetMatch(WeltNewsContext $ctx): void {}
    public function SetMatch(WeltNewsContext $ctx): void {}
    public function PrePoint(WeltNewsContext $ctx): void {}
    public function PreSpec(WeltNewsContext $ctx): void {}
    public function PreRequest(WeltNewsContext $ctx): void {}
    public function PreResponse(WeltNewsContext $ctx): void {}
    public function PreResult(WeltNewsContext $ctx): void {}
    public function PreDone(WeltNewsContext $ctx): void {}
    public function PreUnexpected(WeltNewsContext $ctx): void {}
}
