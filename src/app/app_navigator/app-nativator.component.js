System.register(["@angular/core", "./app-navigator-data.service"], function (exports_1, context_1) {
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
    var core_1, app_navigator_data_service_1, AppNavigatorComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_navigator_data_service_1_1) {
                app_navigator_data_service_1 = app_navigator_data_service_1_1;
            }
        ],
        execute: function () {
            AppNavigatorComponent = (function () {
                function AppNavigatorComponent(appNavigatorDataService) {
                    this.appNavigatorDataService = appNavigatorDataService;
                }
                AppNavigatorComponent.prototype.ngOnInit = function () {
                    this.getNavigatorItems();
                };
                AppNavigatorComponent.prototype.getNavigatorItems = function () {
                    var _this = this;
                    this.appNavigatorDataService.getNavigatorItems().then(function (navitems) { return _this.navitems = navitems; });
                };
                return AppNavigatorComponent;
            }());
            AppNavigatorComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'app-navigator',
                    templateUrl: './app-nativator.component.html',
                    styleUrls: ['./app-nativator.component.css']
                }),
                __metadata("design:paramtypes", [app_navigator_data_service_1.AppNavigatorDataService])
            ], AppNavigatorComponent);
            exports_1("AppNavigatorComponent", AppNavigatorComponent);
        }
    };
});
//# sourceMappingURL=app-nativator.component.js.map