<?php
declare(strict_types=1);

// WeltNews SDK configuration

class WeltNewsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WeltNews",
                "slug" => "welt-news",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.welt.de/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "article" => [],
                ],
            ],
            "entity" => [
        'article' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Article author name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'category',
              'short' => 'Article category (e.g., politics, economy, culture, sports)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Brief summary of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the article',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'imageUrl',
              'short' => 'URL to the article\'s main image',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'publishedAt',
              'short' => 'Publication timestamp',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Article headline',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'uri',
              'name' => 'url',
              'short' => 'URL to the full article',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'article',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/articles/home',
                  'segments' => [
                    [
                      'lit' => 'articles',
                    ],
                    [
                      'lit' => 'home',
                    ],
                  ],
                  'select' => [
                    '$action' => 'home',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.articles`',
                  ],
                  'parts' => [
                    'articles',
                    'home',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WeltNewsFeatures::make_feature($name);
    }
}
