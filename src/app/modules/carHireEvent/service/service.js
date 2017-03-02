System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/catch", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1, Service;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            Service = (function () {
                //    private url = 'http://localhost:7000/cars';  // URL to web API
                function Service(http) {
                    this.http = http;
                    //private url = 'equipments.json';  // URL to web API
                    this.url = 'api/carhireEvents'; // URL to web API
                }
                Service.prototype.fecthData = function (model) {
                    console.info("hero>>" + model.equipInitial);
                    return this.http.get(this.url)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                Service.prototype.addEquip = function (model) {
                    console.info("model >>" + model.equipInitial);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this.url, model, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                Service.prototype.extractData = function (res) {
                    var body = res.json();
                    return body._embedded.carhireEvents || {};
                };
                Service.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        console.error("Error in response");
                        var body = error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                return Service;
            }());
            Service = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], Service);
            exports_1("Service", Service);
        }
    };
});
//# sourceMappingURL=service.js.map