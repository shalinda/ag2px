System.register(["@angular/core", "@angular/forms", "../../model/data-model", "../../service/service"], function (exports_1, context_1) {
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
    var core_1, forms_1, data_model_1, service_1, EventSearch;
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
            }
        ],
        execute: function () {
            EventSearch = (function () {
                function EventSearch(fb, service) {
                    this.fb = fb;
                    this.service = service;
                    this.tabledataOut = new core_1.EventEmitter();
                    this.tabledata = [];
                    this.mode = 'Observable';
                    this.heroForm = this.fb.group({
                        equipNum: ['', forms_1.Validators.required],
                        equipInitial: ['', forms_1.Validators.required],
                        eventType: ['', forms_1.Validators.required],
                    });
                }
                EventSearch.prototype.fecthData = function () {
                    var _this = this;
                    console.log(">> ssss " + data_model_1.Library.data.id);
                    console.log("this.heroForm >>" + this.heroForm.getRawValue());
                    var model = new data_model_1.DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
                    this.service.fecthData(model)
                        .subscribe(function (list) { return (_this.tabledata = list, _this.tabledataOut.emit(_this.tabledata)); }, function (error) { return _this.errorMessage = error; });
                };
                EventSearch.prototype.addEuip = function () {
                    var _this = this;
                    console.log("this.heroForm >>" + this.heroForm.getRawValue());
                    var model = new data_model_1.DataModel(null, this.heroForm.get("equipInitial") && this.heroForm.get("equipInitial").value || null, this.heroForm.get("equipNum") && this.heroForm.get("equipNum").value || null, null, this.heroForm.get("eventType") && this.heroForm.get("eventType").value || null);
                    this.service.addEquip(model)
                        .subscribe(function () { console.log('>>>'); }, function (error) { return _this.errorMessage = error; });
                };
                return EventSearch;
            }());
            __decorate([
                core_1.Output('tabledata'),
                __metadata("design:type", Object)
            ], EventSearch.prototype, "tabledataOut", void 0);
            EventSearch = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'EventSearch',
                    templateUrl: './event-search.html',
                }),
                __metadata("design:paramtypes", [forms_1.FormBuilder, service_1.Service])
            ], EventSearch);
            exports_1("EventSearch", EventSearch);
        }
    };
});
