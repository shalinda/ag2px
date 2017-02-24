System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InMemoryDataService;
    return {
        setters: [],
        execute: function () {
            InMemoryDataService = (function () {
                function InMemoryDataService() {
                }
                InMemoryDataService.prototype.createDb = function () {
                    console.log("api employee");
                    var employees = [
                        { id: 1, name: 'Mr. Nice', empType: '2', address: 'Chuck Overstreet11' },
                        { id: 2, name: 'Narco', empType: '1', address: 'Chuck Overstreet12' },
                        { id: 3, name: 'Bombasto', empType: '1', address: 'Chuck Overstreet13' },
                        { id: 4, name: 'Celeritas', empType: '1', address: 'Chuck Overstreet14' },
                        { id: 5, name: 'Magneta', empType: '1', address: 'Chuck Overstreet15' },
                        { id: 6, name: 'RubberMan', empType: '1', address: 'Chuck Overstreet16' },
                        { id: 7, name: 'Dynama', empType: '1', address: 'Chuck Overstreet17' },
                        { id: 8, name: 'Dr IQ', empType: '1', address: 'Chuck Overstreet18' },
                        { id: 9, name: 'Magma', empType: '1', address: 'Chuck Overstreet19' },
                        { id: 10, name: 'Tornado1', empType: '1', address: 'Chuck Overstreet20' }
                    ];
                    var empTypes = [
                        { key: 'MG', value: 'Manager' },
                        { key: 'EG', value: 'Engineer' }
                    ];
                    return { employees: employees, empTypes: empTypes };
                };
                return InMemoryDataService;
            }());
            exports_1("InMemoryDataService", InMemoryDataService);
        }
    };
});
//# sourceMappingURL=in-memory-data.service.js.map