-- WeltNews SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WeltNews",
      slug = "welt-news",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://www.welt.de/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["article"] = {},
      },
    },
    entity = {
      ["article"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Article author name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["short"] = "Article category (e.g., politics, economy, culture, sports)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief summary of the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "imageUrl",
            ["short"] = "URL to the article's main image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "publishedAt",
            ["short"] = "Publication timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Article headline",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the full article",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "article",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/articles/home",
                ["parts"] = {
                  "articles",
                  "home",
                },
                ["select"] = {
                  ["$action"] = "home",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.articles`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
