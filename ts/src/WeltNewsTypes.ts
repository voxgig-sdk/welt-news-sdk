// Typed models for the WeltNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Article {
  author?: string
  category?: string
  description?: string
  id?: string
  image_url?: string
  published_at?: string
  title?: string
  url?: string
}

export interface ArticleListMatch {
  author?: string
  category?: string
  description?: string
  id?: string
  image_url?: string
  published_at?: string
  title?: string
  url?: string
}

