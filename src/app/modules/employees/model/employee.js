System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Employee;
    return {
        setters: [],
        execute: function () {
            Employee = (function () {
                function Employee(id, name, empType, address) {
                    this.id = id;
                    this.name = name;
                    this.empType = empType;
                    this.address = address;
                }
                return Employee;
            }());
            exports_1("Employee", Employee);
        }
    };
});
