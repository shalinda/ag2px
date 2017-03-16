System.register(["rxjs/Observable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, DataModel, sep, version, Library, SharedService, GlobalVariable;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
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
            SharedService = (function () {
                function SharedService() {
                    var _this = this;
                    this.globalVarUpdate = Observable_1.Observable.create(function (observer) {
                        _this.globalVarObserver = observer;
                    });
                }
                SharedService.prototype.updateGlobalVar = function (newValue) {
                    this.globalVar = newValue;
                    this.globalVarObserver.next(this.globalVar);
                };
                return SharedService;
            }());
            exports_1("SharedService", SharedService);
            exports_1("GlobalVariable", GlobalVariable = Object.freeze({
                BASE_API_URL: 'http://example.com/',
            }));
        }
    };
});
