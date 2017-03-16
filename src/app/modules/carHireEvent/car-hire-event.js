System.register(["@angular/core", "@angular/forms", "./model/data-model", "./service/service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, forms_1, data_model_1, service_1, router_1, CarHireEvent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (data_model_1_1) {
                data_model_1 = data_model_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            CarHireEvent = (function () {
                function CarHireEvent(_router, fb, service) {
                    this.fb = fb;
                    this.service = service;
                    this.tabledata = [];
                    this.data2 = new data_model_1.DataModel();
                    this.heroForm = this.fb.group({
                        equipNum: ['', forms_1.Validators.required],
                        equipInitial: ['', forms_1.Validators.required],
                        eventType: ['', forms_1.Validators.required],
                    });
                }
                CarHireEvent.prototype.onTableDataRecvd = function (dataSet) {
                    this.tabledata = dataSet;
                    console.log(this.tabledata);
                };
                CarHireEvent.prototype.ngAfterViewInit = function () {
                    Polymer.dom(document).querySelector("#mytable").addEventListener("px-cell-click", function (e) {
                        Polymer.dom(document).querySelector("#three").modalButtonClicked();
                        this.data2 = new data_model_1.DataModel(1, 'xx', 'xxxx', null, 'OLL');
                        var clickedRow = e.detail.row;
                        console.log("Row clicked", clickedRow, " _selected: ", clickedRow._selected);
                    });
                };
                return CarHireEvent;
            }());
            CarHireEvent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    templateUrl: './car-hire-event.html',
                }),
                __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, service_1.Service])
            ], CarHireEvent);
            exports_1("CarHireEvent", CarHireEvent);
        }
    };
});
