System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, MenuComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MenuComponent = (function () {
                function MenuComponent() {
                }
                return MenuComponent;
            }());
            MenuComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'app-menu',
                    template: "\n       <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Inbox</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Trash</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Spam</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Forums</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Updates</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">local_offer</i>Promos</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">shopping_cart</i>Purchases</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">people</i>Social</a>\n          <div class=\"mdl-layout-spacer\"></div>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span class=\"visuallyhidden\">Help</span></a>\n        </nav>\n    "
                })
            ], MenuComponent);
            exports_1("MenuComponent", MenuComponent);
        }
    };
});
//# sourceMappingURL=menu.component.js.map