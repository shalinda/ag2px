System.register(["./hero-mock.data"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hero_mock_data_1, HeroService;
    return {
        setters: [
            function (hero_mock_data_1_1) {
                hero_mock_data_1 = hero_mock_data_1_1;
            }
        ],
        execute: function () {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroList = function () {
                    return Promise.resolve(hero_mock_data_1.HEROES);
                };
                HeroService.prototype.getHeroById = function (id) {
                    return this.getHeroList().then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
                };
                HeroService.prototype.add = function (hero) {
                    hero_mock_data_1.HEROES.push(hero);
                };
                HeroService.prototype.delete = function (id) {
                    for (var i = 0; i < hero_mock_data_1.HEROES.length; i++) {
                        if (hero_mock_data_1.HEROES[i].id == id) {
                            hero_mock_data_1.HEROES.splice(i, 1);
                            break;
                        }
                    }
                };
                HeroService.prototype.update = function (_hero) {
                    for (var i = 0; i < hero_mock_data_1.HEROES.length; i++) {
                        if (hero_mock_data_1.HEROES[i].id == _hero.id) {
                            hero_mock_data_1.HEROES[i].name = _hero.name;
                            hero_mock_data_1.HEROES[i].alterEgo = _hero.alterEgo;
                            hero_mock_data_1.HEROES[i].power = _hero.power;
                            break;
                        }
                    }
                };
                HeroService.prototype.getNextHeroId = function () {
                    return hero_mock_data_1.HEROES.length + 1;
                };
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    };
});
//# sourceMappingURL=hero.service.js.map