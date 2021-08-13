"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_response_error_1 = require("../errors/custom-response-error");
exports.errorHandler = function (err, req, res, next) {
    console.error(err.message);
    if (err instanceof custom_response_error_1.CustomResponseError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [
            { message: err.message }
        ]
    });
};
