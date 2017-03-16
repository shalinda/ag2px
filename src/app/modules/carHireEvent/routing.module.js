System.register(["@angular/core", "@angular/router", "./view/grid/event-grid", "./view/edit/event-edit", "./car-hire-event"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, event_grid_1, event_edit_1, car_hire_event_1, appRoutes, EvenetRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_grid_1_1) {
                event_grid_1 = event_grid_1_1;
            },
            function (event_edit_1_1) {
                event_edit_1 = event_edit_1_1;
            },
            function (car_hire_event_1_1) {
                car_hire_event_1 = car_hire_event_1_1;
            }
        ],
        execute: function () {
            exports_1("appRoutes", appRoutes = [
                {
                    path: 'carHireEvent',
                    component: car_hire_event_1.CarHireEvent,
                    children: [
                        { path: 'grid', component: event_grid_1.EventGrid },
                        { path: 'edit', component: event_edit_1.EventEdit },
                        {
                            path: '',
                            redirectTo: 'grid',
                            pathMatch: 'full'
                        }
                    ]
                }
            ]);
            EvenetRoutingModule = (function () {
                function EvenetRoutingModule() {
                }
                return EvenetRoutingModule;
            }());
            EvenetRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [
                        router_1.RouterModule.forChild(appRoutes),
                    ],
                    declarations: [],
                    exports: []
                })
            ], EvenetRoutingModule);
            exports_1("EvenetRoutingModule", EvenetRoutingModule);
        }
    };
});
