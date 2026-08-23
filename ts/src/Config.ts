
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      }
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
          "name": "imageUrl",
          "short": "URL to the article's main image",
          "type": "`$STRING`"
        },
        {
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
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "articles",
                "home"
              ],
              "select": {
                "$action": "home"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              }
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
  config
}

