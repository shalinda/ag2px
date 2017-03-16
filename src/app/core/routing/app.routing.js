System.register(["@angular/router", "../../modules/carHireEvent/car-hire-event", "../../modules/carHireEvent/view/grid/event-grid", "../../modules/carHireEvent/view/edit/event-edit"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, car_hire_event_1, event_grid_1, event_edit_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_hire_event_1_1) {
                car_hire_event_1 = car_hire_event_1_1;
            },
            function (event_grid_1_1) {
                event_grid_1 = event_grid_1_1;
            },
            function (event_edit_1_1) {
                event_edit_1 = event_edit_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: car_hire_event_1.CarHireEvent },
                { path: 'carHireEvent', component: car_hire_event_1.CarHireEvent },
                { path: 'grid', component: event_grid_1.EventGrid },
                { path: 'edit', component: event_edit_1.EventEdit },
                { path: '', redirectTo: 'carHireEvent', pathMatch: 'full' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
