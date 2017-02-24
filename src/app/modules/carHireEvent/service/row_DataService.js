System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, row_DataService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            row_DataService = (function () {
                function row_DataService() {
                }
                row_DataService.prototype.getDate = function () {
                    var data = { "name": "John", "age": 31, "city": "New York" };
                    return data;
                };
                row_DataService.prototype.Search = function () {
                };
                return row_DataService;
            }());
            row_DataService = __decorate([
                core_1.Injectable()
            ], row_DataService);
            exports_1("row_DataService", row_DataService);
        }
    };
});
//# sourceMappingURL=row_DataService.js.map