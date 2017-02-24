System.register(["@angular/core", "@angular/http", "@angular/forms", "./service/row_DataService", "./CarHireEvent", "@angular/common"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, forms_1, row_DataService_1, CarHireEvent_1, common_1, CarHireEventModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (row_DataService_1_1) {
                row_DataService_1 = row_DataService_1_1;
            },
            function (CarHireEvent_1_1) {
                CarHireEvent_1 = CarHireEvent_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            CarHireEventModule = (function () {
                function CarHireEventModule() {
                }
                return CarHireEventModule;
            }());
            CarHireEventModule = __decorate([
                core_1.NgModule({
                    imports: [
                        http_1.HttpModule,
                        http_1.JsonpModule,
                        forms_1.FormsModule,
                        common_1.CommonModule,
                    ],
                    declarations: [
                        CarHireEvent_1.CarHireEvent,
                    ],
                    providers: [
                        row_DataService_1.row_DataService,
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                })
            ], CarHireEventModule);
            exports_1("CarHireEventModule", CarHireEventModule);
        }
    };
});
//# sourceMappingURL=CarHire.module.js.map