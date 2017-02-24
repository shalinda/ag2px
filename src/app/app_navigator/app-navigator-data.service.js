System.register(["./app-navigator-items"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_navigator_items_1, AppNavigatorDataService;
    return {
        setters: [
            function (app_navigator_items_1_1) {
                app_navigator_items_1 = app_navigator_items_1_1;
            }
        ],
        execute: function () {
            AppNavigatorDataService = (function () {
                function AppNavigatorDataService() {
                }
                AppNavigatorDataService.prototype.getNavigatorItems = function () {
                    return Promise.resolve(app_navigator_items_1.NAVIGATOR_ITEMS);
                };
                AppNavigatorDataService.prototype.getNavigatorItemsAsString = function () {
                    return Promise.resolve(JSON.stringify(app_navigator_items_1.NAVIGATOR_ITEMS));
                };
                return AppNavigatorDataService;
            }());
            exports_1("AppNavigatorDataService", AppNavigatorDataService);
            // If service is registered at bootstrap level, that serice is avilable for the whole applicationCache.
            // If service is registered at component level with directives, that is available to that componentna and it's children.
        }
    };
});
//# sourceMappingURL=app-navigator-data.service.js.map