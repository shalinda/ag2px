System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataModell;
    return {
        setters: [],
        execute: function () {
            DataModell = (function () {
                function DataModell() {
                }
                DataModell.prototype.createDb = function () {
                    var equipments = [
                        { id: 1, equiInit: 'Windstorm', equipNum: 'dddd' },
                        { id: 1, equiInit: 'Windstorm', equipNum: 'dddd' },
                        { id: 1, equiInit: 'Windstorm', equipNum: 'dddd' },
                        { id: 1, equiInit: 'Windstorm', equipNum: 'dddd' },
                        { id: 1, equiInit: 'Windstorm', equipNum: 'dddd' }
                    ];
                    return { equipments: equipments };
                };
                return DataModell;
            }());
            exports_1("DataModell", DataModell);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
