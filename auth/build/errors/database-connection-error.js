"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var custom_response_error_1 = require("./custom-response-error");
var DatabaseConnectionError = /** @class */ (function (_super) {
    __extends(DatabaseConnectionError, _super);
    function DatabaseConnectionError() {
        var _this = _super.call(this, "Error connecting to database") || this;
        _this.statusCode = 500;
        Object.setPrototypeOf(_this, DatabaseConnectionError.prototype);
        return _this;
    }
    DatabaseConnectionError.prototype.serializeErrors = function () {
        return [
            { message: "Error connecting to database" }
        ];
    };
    return DatabaseConnectionError;
}(custom_response_error_1.CustomResponseError));
exports.DatabaseConnectionError = DatabaseConnectionError;
