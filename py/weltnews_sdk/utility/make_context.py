# WeltNews SDK utility: make_context

from weltnews_sdk.core.context import WeltNewsContext


def make_context_util(ctxmap, basectx):
    return WeltNewsContext(ctxmap, basectx)
