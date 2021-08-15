"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_authorised_error_1 = require("../errors/not-authorised-error");
exports.requireAuth = function (req, res, next) {
    if (!req.currentUser) {
        throw new not_authorised_error_1.NotAuthorisedError();
    }
    next();
};
