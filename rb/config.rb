# WeltNews SDK configuration

module WeltNewsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WeltNews",
        "slug" => "welt-news",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.welt.de/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "article" => {},
        },
      },
      "entity" => {
        "article" => {
          "fields" => [
            {
              "name" => "author",
              "short" => "Article author name",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Article category (e.g., politics, economy, culture, sports)",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Brief summary of the article",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the article",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "imageUrl",
              "short" => "URL to the article's main image",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "publishedAt",
              "short" => "Publication timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Article headline",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "URL to the full article",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "article",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/articles/home",
                  "segments" => [
                    {
                      "lit" => "articles",
                    },
                    {
                      "lit" => "home",
                    },
                  ],
                  "select" => {
                    "$action" => "home",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.articles`",
                  },
                  "parts" => [
                    "articles",
                    "home",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WeltNewsFeatures.make_feature(name)
  end
end
