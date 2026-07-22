# WeltNews SDK feature factory

from feature.base_feature import WeltNewsBaseFeature
from feature.test_feature import WeltNewsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WeltNewsBaseFeature(),
        "test": lambda: WeltNewsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
