System.register(["@angular/core", "@angular/router", "@angular/common", "rxjs/add/operator/switchMap", "../model/employee", "../service/employee.service"], function (exports_1, context_1) {
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
    var core_1, router_1, common_1, employee_1, employee_service_1, EmployeeDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }
        ],
        execute: function () {
            EmployeeDetailComponent = (function () {
                function EmployeeDetailComponent(employeeService, route, location, router) {
                    this.employeeService = employeeService;
                    this.route = route;
                    this.location = location;
                    this.router = router;
                }
                EmployeeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.switchMap(function (params) { return _this.employeeService.getEmployeeById(+params['id']); }).subscribe(function (employee) {
                        if (employee == null) {
                            _this.newRecord();
                        }
                        else {
                            _this.employee = JSON.parse(JSON.stringify(employee)); // clone the object
                        }
                    });
                    this.employeeService.getEmpTypeList().then(function (empTypes) { return _this.empTypes = empTypes; });
                };
                EmployeeDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                EmployeeDetailComponent.prototype.add = function () {
                    var id;
                    this.employeeService.getNextEmployeeId().
                        then(function (id) { return id; });
                    this.employee.id = id;
                    this.employeeService.add(this.employee);
                    this.router.navigate(['employees']);
                };
                EmployeeDetailComponent.prototype.update = function () {
                    this.employeeService.update(this.employee);
                    this.router.navigate(['employees']);
                };
                EmployeeDetailComponent.prototype.delete = function () {
                    this.employeeService.delete(this.employee.id);
                    this.router.navigate(['employees']);
                };
                EmployeeDetailComponent.prototype.newRecord = function () {
                    var id;
                    this.employeeService.getNextEmployeeId().
                        then(function (id) { return id; });
                    this.employee = new employee_1.Employee(id, '', '', '');
                };
                Object.defineProperty(EmployeeDetailComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.employee); },
                    enumerable: true,
                    configurable: true
                });
                return EmployeeDetailComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", employee_1.Employee)
            ], EmployeeDetailComponent.prototype, "employee", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], EmployeeDetailComponent.prototype, "empTypes", void 0);
            EmployeeDetailComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'my-employee-detail',
                    templateUrl: 'employee-detail.component.html',
                    styleUrls: ['employee-detail.component.css']
                }),
                __metadata("design:paramtypes", [employee_service_1.EmployeeService,
                    router_1.ActivatedRoute,
                    common_1.Location,
                    router_1.Router])
            ], EmployeeDetailComponent);
            exports_1("EmployeeDetailComponent", EmployeeDetailComponent);
        }
    };
});
//# sourceMappingURL=employee-detail.component.js.map