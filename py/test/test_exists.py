# WeltNews SDK exists test

import pytest
from weltnews_sdk import WeltNewsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WeltNewsSDK.test(None, None)
        assert testsdk is not None
