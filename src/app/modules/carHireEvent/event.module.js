System.register(["@angular/core", "./car-hire-event", "./view/grid/event-grid", "./view/edit/event-edit", "./view/search/event-search", "@angular/forms", "@angular/common", "./service/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, car_hire_event_1, event_grid_1, event_edit_1, event_search_1, forms_1, common_1, service_1, EventModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_hire_event_1_1) {
                car_hire_event_1 = car_hire_event_1_1;
            },
            function (event_grid_1_1) {
                event_grid_1 = event_grid_1_1;
            },
            function (event_edit_1_1) {
                event_edit_1 = event_edit_1_1;
            },
            function (event_search_1_1) {
                event_search_1 = event_search_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            EventModule = (function () {
                function EventModule() {
                }
                return EventModule;
            }());
            EventModule = __decorate([
                core_1.NgModule({
                    imports: [
                        forms_1.ReactiveFormsModule,
                        forms_1.FormsModule,
                        common_1.CommonModule,
                    ],
                    declarations: [
                        car_hire_event_1.CarHireEvent,
                        event_grid_1.EventGrid,
                        event_edit_1.EventEdit,
                        event_search_1.EventSearch,
                    ],
                    providers: [
                        service_1.Service,
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                })
            ], EventModule);
            exports_1("EventModule", EventModule);
        }
    };
});
