System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataModel;
    return {
        setters: [],
        execute: function () {
            DataModel = (function () {
                function DataModel(id, equipInitial, equipNum, eventDateTime, eventType) {
                    this.id = id;
                    this.equipInitial = equipInitial;
                    this.equipNum = equipNum;
                    this.eventDateTime = eventDateTime;
                    this.eventType = eventType;
                }
                return DataModel;
            }());
            exports_1("DataModel", DataModel);
            /*
            Copyright 2017 Google Inc. All Rights Reserved.
            Use of this source code is governed by an MIT-style license that
            can be found in the LICENSE file at http://angular.io/license
            */ 
        }
    };
});
