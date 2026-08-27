package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WeltNews",
			"slug": "welt-news",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.welt.de/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"article": map[string]any{},
			},
		},
		"entity": map[string]any{
			"article": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Article author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Article category (e.g., politics, economy, culture, sports)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Brief summary of the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageUrl",
						"short": "URL to the article's main image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publishedAt",
						"short": "Publication timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Article headline",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL to the full article",
						"type": "`$STRING`",
					},
				},
				"name": "article",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/articles/home",
								"parts": []any{
									"articles",
									"home",
								},
								"select": map[string]any{
									"$action": "home",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.articles`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
