package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewArticleEntityFunc func(client *WeltNewsSDK, entopts map[string]any) WeltNewsEntity

