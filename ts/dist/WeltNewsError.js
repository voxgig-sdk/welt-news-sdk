"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeltNewsError = void 0;
class WeltNewsError extends Error {
    isWeltNewsError = true;
    sdk = 'WeltNews';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WeltNewsError = WeltNewsError;
//# sourceMappingURL=WeltNewsError.js.map