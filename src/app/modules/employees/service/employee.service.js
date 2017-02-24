System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, EmployeeService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            EmployeeService = (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.employeeUrl = '/api/employees';
                    this.empTypesUrl = '/api/empTypes';
                }
                EmployeeService.prototype.getEmpTypeList = function () {
                    return this.http.get(this.empTypesUrl)
                        .toPromise()
                        .then(function (response) { return response.json()._embedded.empTypes; })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.getEmployeeList = function () {
                    return this.http.get(this.employeeUrl)
                        .toPromise()
                        .then(function (response) { return response.json()._embedded.employees; })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.success = function () {
                    return Promise.resolve();
                };
                EmployeeService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                EmployeeService.prototype.getEmployeeById = function (id) {
                    var fetchUrl = this.employeeUrl + "/" + id;
                    return this.http.get(fetchUrl)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.add = function (employee) {
                    return this.http.post(this.employeeUrl, JSON.stringify(employee), { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.delete = function (id) {
                    var deleteUrl = this.employeeUrl + "/" + id;
                    return this.http.delete(deleteUrl)
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
                };
                EmployeeService.prototype.update = function (employee) {
                    var updateUrl = this.employeeUrl + "/" + employee.id;
                    return this.http.put(updateUrl, JSON.stringify(employee), { headers: this.headers })
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
                };
                EmployeeService.prototype.getNextEmployeeId = function () {
                    return this.getEmployeeList()
                        .then(function (employees) { return employees.length + 1; })
                        .catch(this.handleError);
                };
                return EmployeeService;
            }());
            EmployeeService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], EmployeeService);
            exports_1("EmployeeService", EmployeeService);
        }
    };
});
//# sourceMappingURL=employee.service.js.map