
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WeltNews',
        slug: "welt-news",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.welt.de/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      article: {
      },

    }
  }


  entity = {
    "article": {
      "fields": [
        {
          "name": "author",
          "short": "Article author name",
          "type": "`$STRING`"
        },
        {
          "name": "category",
          "short": "Article category (e.g., politics, economy, culture, sports)",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Brief summary of the article",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the article",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "imageUrl",
          "short": "URL to the article's main image",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "publishedAt",
          "short": "Publication timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Article headline",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "article",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/articles/home",
              "segments": [
                {
                  "lit": "articles"
                },
                {
                  "lit": "home"
                }
              ],
              "select": {
                "$action": "home"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              },
              "parts": [
                "articles",
                "home"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

