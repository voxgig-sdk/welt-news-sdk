# WeltNews SDK feature factory

from weltnews_sdk.feature.base_feature import WeltNewsBaseFeature
from weltnews_sdk.feature.test_feature import WeltNewsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WeltNewsBaseFeature(),
        "test": lambda: WeltNewsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
