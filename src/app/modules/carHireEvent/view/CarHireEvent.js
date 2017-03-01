System.register(["@angular/core", "../service/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, service_1, CarHireEvent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            CarHireEvent = (function () {
                function CarHireEvent(service) {
                    this.service = service;
                    this.tabledata = [];
                    this.mode = 'Observable';
                }
                CarHireEvent.prototype.fecthData = function (equiInit, equipNum) {
                    var _this = this;
                    var model;
                    model = {
                        id: 1,
                        equipInitial: equiInit,
                        equipNum: equipNum,
                    };
                    this.service.fecthData(model)
                        .subscribe(function (list) { return _this.tabledata = list; }, function (error) { return _this.errorMessage = error; });
                };
                CarHireEvent.prototype.addEuip = function (equiInit, equipNum) {
                    var _this = this;
                    var model = {
                        id: 1,
                        equipInitial: equiInit,
                        equipNum: equipNum,
                    };
                    console.log("init>>" + model.equipInitial + " num >>" + model.equipNum);
                    if (!equiInit) {
                        return;
                    }
                    if (!equipNum) {
                        return;
                    }
                    this.service.addEquip(model)
                        .subscribe(function (modelIncoming) { return _this.tabledata.push(modelIncoming); }, function (error) { return _this.errorMessage = error; });
                };
                return CarHireEvent;
            }());
            CarHireEvent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    templateUrl: './CarHireEvent.html',
                    styleUrls: ['../css/app.component.scss'],
                    styles: ['.error {color:red;}'],
                    providers: [service_1.Service],
                }),
                __metadata("design:paramtypes", [service_1.Service])
            ], CarHireEvent);
            exports_1("CarHireEvent", CarHireEvent);
        }
    };
});
//# sourceMappingURL=CarHireEvent.js.map