System.register(["@angular/core", "@angular/common", "@angular/platform-browser", "@angular/forms", "@angular/http", "./app.component", "../modules/carHireEvent/CarHire.module", "./routing/app.routing", "../app_navigator/app-nativator.component", "../modules/students/list/student-list.component", "../modules/students/detail/student-detail.component", "../modules/heroes/list/hero-list.component", "../modules/heroes/detail/hero-detail.component", "../modules/employees/list/employee-list.component", "../modules/employees/detail/employee-detail.component", "../layout/header.component", "../layout/menu.component", "../layout/sidebar.component", "../layout/profile.component", "../app_navigator/app-navigator-data.service", "../modules/students/service/student.service", "../modules/heroes/service/hero.service", "../modules/employees/service/employee.service", "./default-request-options.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, platform_browser_1, forms_1, http_1, app_component_1, CarHire_module_1, app_routing_1, app_nativator_component_1, student_list_component_1, student_detail_component_1, hero_list_component_1, hero_detail_component_1, employee_list_component_1, employee_detail_component_1, header_component_1, menu_component_1, sidebar_component_1, profile_component_1, app_navigator_data_service_1, student_service_1, hero_service_1, employee_service_1, powerList, genderList, empTypeList, default_request_options_service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (CarHire_module_1_1) {
                CarHire_module_1 = CarHire_module_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_nativator_component_1_1) {
                app_nativator_component_1 = app_nativator_component_1_1;
            },
            function (student_list_component_1_1) {
                student_list_component_1 = student_list_component_1_1;
            },
            function (student_detail_component_1_1) {
                student_detail_component_1 = student_detail_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (employee_list_component_1_1) {
                employee_list_component_1 = employee_list_component_1_1;
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (app_navigator_data_service_1_1) {
                app_navigator_data_service_1 = app_navigator_data_service_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (default_request_options_service_1_1) {
                default_request_options_service_1 = default_request_options_service_1_1;
            }
        ],
        execute: function () {
            powerList = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
            genderList = [{ 'key': 'M', 'value': 'Male' }, { 'key': 'F', 'value': 'Female' }];
            empTypeList = [{ 'key': '1', 'value': 'HR' }, { 'key': '2', 'value': 'IT' }, { 'key': '3', 'value': 'Admin' }];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        app_routing_1.routing,
                        http_1.HttpModule,
                        http_1.JsonpModule,
                        CarHire_module_1.CarHireEventModule,
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        app_nativator_component_1.AppNavigatorComponent,
                        student_list_component_1.StudentListCoponent,
                        student_detail_component_1.StudentDetailComponent,
                        hero_list_component_1.HeroListComponent,
                        hero_detail_component_1.HeroDetailComponent,
                        employee_list_component_1.EmployeeListComponent,
                        employee_detail_component_1.EmployeeDetailComponent,
                        header_component_1.HeaderComponent,
                        menu_component_1.MenuComponent,
                        sidebar_component_1.SidebarComponent,
                        profile_component_1.UserProfileComponent,
                    ],
                    providers: [
                        default_request_options_service_1.requestOptionsProvider,
                        app_routing_1.appRoutingProviders,
                        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                        app_navigator_data_service_1.AppNavigatorDataService,
                        student_service_1.StudentService,
                        employee_service_1.EmployeeService,
                        hero_service_1.HeroService,
                        { provide: 'powerListToken', useValue: powerList },
                        { provide: 'genderList', useValue: genderList },
                        { provide: 'empTypeList', useValue: empTypeList }
                    ],
                    bootstrap: [app_component_1.AppComponent],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map