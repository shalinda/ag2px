System.register(["@angular/core", "@angular/router", "@angular/common", "@angular/forms", "rxjs/add/operator/switchMap", "../model/hero", "../service/hero.service"], function (exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, common_1, forms_1, hero_1, hero_service_1, HeroDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (_1) {
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }
        ],
        execute: function () {
            HeroDetailComponent = (function () {
                function HeroDetailComponent(heroService, route, location, router, powers) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = location;
                    this.router = router;
                    this.powers = powers;
                    this.formErrors = {
                        'name': '',
                        'power': ''
                    };
                    this.validationMessages = {
                        'name': {
                            'required': 'Name is required.'
                        },
                        'power': {
                            'required': 'Power is required.'
                        }
                    };
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.switchMap(function (params) { return _this.heroService.getHeroById(+params['id']); }).subscribe(function (hero) {
                        if (hero == null) {
                            _this.newHero();
                        }
                        else {
                            _this.hero = JSON.parse(JSON.stringify(hero)); // clone the object
                        }
                    });
                };
                HeroDetailComponent.prototype.ngAfterViewChecked = function () {
                    this.formChanged();
                };
                HeroDetailComponent.prototype.formChanged = function () {
                    var _this = this;
                    if (this.currentForm === this.heroForm) {
                        return;
                    }
                    this.heroForm = this.currentForm;
                    if (this.heroForm) {
                        this.heroForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
                    }
                };
                HeroDetailComponent.prototype.onValueChanged = function (data) {
                    if (!this.heroForm) {
                        return;
                    }
                    var form = this.heroForm.form;
                    for (var field in this.formErrors) {
                        // clear previous error message (if any)
                        this.formErrors[field] = '';
                        var control = form.get(field);
                        if (control && control.dirty && !control.valid) {
                            var messages = this.validationMessages[field];
                            for (var key in control.errors) {
                                this.formErrors[field] += messages[key] + ' ';
                            }
                        }
                    }
                };
                HeroDetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                HeroDetailComponent.prototype.add = function () {
                    this.hero.id = this.heroService.getNextHeroId();
                    this.heroService.add(this.hero);
                    this.router.navigate(['heroes']);
                };
                HeroDetailComponent.prototype.update = function () {
                    this.heroService.update(this.hero);
                    this.router.navigate(['heroes']);
                };
                HeroDetailComponent.prototype.delete = function () {
                    this.heroService.delete(this.hero.id);
                    this.router.navigate(['heroes']);
                };
                HeroDetailComponent.prototype.newHero = function () {
                    this.hero = new hero_1.Hero(this.heroService.getNextHeroId(), '', '', '');
                };
                Object.defineProperty(HeroDetailComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.hero); },
                    enumerable: true,
                    configurable: true
                });
                return HeroDetailComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", hero_1.Hero)
            ], HeroDetailComponent.prototype, "hero", void 0);
            __decorate([
                core_1.ViewChild('heroForm'),
                __metadata("design:type", forms_1.NgForm)
            ], HeroDetailComponent.prototype, "currentForm", void 0);
            HeroDetailComponent = __decorate([
                core_1.Component({
                    moduleId: __moduleName,
                    selector: 'my-hero-detail',
                    templateUrl: 'hero-detail.component.html',
                    styleUrls: ['hero-detail.component.css']
                }),
                __param(4, core_1.Inject('powerListToken')),
                __metadata("design:paramtypes", [hero_service_1.HeroService,
                    router_1.ActivatedRoute,
                    common_1.Location,
                    router_1.Router, Object])
            ], HeroDetailComponent);
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    };
});
