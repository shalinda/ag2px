System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SidebarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SidebarComponent = (function () {
                function SidebarComponent() {
                }
                return SidebarComponent;
            }());
            SidebarComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'app-sidebar',
                    template: "\n        <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n            <user-profile class=\"demo-drawer-header\">\n            </user-profile>\n            <app-menu class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n            </app-menu>\n        </div>\n    "
                })
            ], SidebarComponent);
            exports_1("SidebarComponent", SidebarComponent);
        }
    };
});
