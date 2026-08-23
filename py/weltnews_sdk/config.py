# WeltNews SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WeltNews",
            "slug": "welt-news",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.welt.de/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "article": {},
            },
        },
        "entity": {
      "article": {
        "fields": [
          {
            "name": "author",
            "short": "Article author name",
            "type": "`$STRING`",
          },
          {
            "name": "category",
            "short": "Article category (e.g., politics, economy, culture, sports)",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Brief summary of the article",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the article",
            "type": "`$STRING`",
          },
          {
            "name": "imageUrl",
            "short": "URL to the article's main image",
            "type": "`$STRING`",
          },
          {
            "name": "publishedAt",
            "short": "Publication timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Article headline",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "URL to the full article",
            "type": "`$STRING`",
          },
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
                  "home",
                ],
                "select": {
                  "$action": "home",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.articles`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
