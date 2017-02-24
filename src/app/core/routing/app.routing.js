System.register(["@angular/router", "../../modules/carHireEvent/CarHireEvent", "../../modules/students/list/student-list.component", "../../modules/heroes/list/hero-list.component", "../../modules/heroes/detail/hero-detail.component", "../../modules/students/detail/student-detail.component", "../../modules/employees/list/employee-list.component", "../../modules/employees/detail/employee-detail.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, CarHireEvent_1, student_list_component_1, hero_list_component_1, hero_detail_component_1, student_detail_component_1, employee_list_component_1, employee_detail_component_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (CarHireEvent_1_1) {
                CarHireEvent_1 = CarHireEvent_1_1;
            },
            function (student_list_component_1_1) {
                student_list_component_1 = student_list_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (student_detail_component_1_1) {
                student_detail_component_1 = student_detail_component_1_1;
            },
            function (employee_list_component_1_1) {
                employee_list_component_1 = employee_list_component_1_1;
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', component: CarHireEvent_1.CarHireEvent },
                //    {path: 'carHireCycle', component: CarHireEvent2},
                { path: 'carHireEvent', component: CarHireEvent_1.CarHireEvent },
                { path: 'students', component: student_list_component_1.StudentListCoponent },
                { path: 'heroes', component: hero_list_component_1.HeroListComponent },
                { path: 'heroDetail/:id', component: hero_detail_component_1.HeroDetailComponent },
                { path: 'studentDetail/:id', component: student_detail_component_1.StudentDetailComponent },
                { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
                { path: 'employeeDetail/:id', component: employee_detail_component_1.EmployeeDetailComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map