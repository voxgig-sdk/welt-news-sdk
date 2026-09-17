// Typed models for the WeltNews SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Article {
}

export interface ArticleListMatch {

  // Selects a custom action instead of the plain list:
  //   'home'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

