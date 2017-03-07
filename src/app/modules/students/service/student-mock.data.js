System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var STUDENTS;
    return {
        setters: [],
        execute: function () {
            exports_1("STUDENTS", STUDENTS = [
                { id: 1, name: "Jake", gender: 'M' },
                { id: 2, name: "Brent", gender: 'M' },
                { id: 3, name: "Jim", gender: 'M' },
                { id: 4, name: "Seth", gender: 'M' },
                { id: 5, name: "Kelly", gender: 'F' },
                { id: 6, name: "Viki", gender: 'F' }
            ]);
        }
    };
});
