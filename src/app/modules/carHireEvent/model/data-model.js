System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataModel, sep, version, Library;
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
            exports_1("sep", sep = '/');
            exports_1("version", version = "22.2.2");
            Library = (function () {
                function Library() {
                }
                return Library;
            }());
            Library.CANVAS_WIDTH = 2;
            Library.data = new DataModel(123, 'zzzz', null, null, null);
            exports_1("Library", Library);
        }
    };
});
