/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require("angular2/http");
var router_1 = require('angular2/router');
var registration_1 = require('components/registration');
var guest_list_1 = require('components/guest-list');
var guest_service_1 = require('components/guest-service');
var guest_search_1 = require('components/guest-search');
var GuestsApp = (function () {
    function GuestsApp() {
    }
    GuestsApp = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'registration', component: registration_1.Registration },
            { path: '/list', as: 'list', component: guest_list_1.GuestList },
            { path: '/search', as: 'search', component: guest_search_1.GuestSearch }
        ]),
        angular2_1.Component({
            appInjector: [router_1.routerInjectables],
            selector: 'guests-app'
        }),
        angular2_1.View({
            templateUrl: 'templates/guest-app.html',
            directives: [router_1.RouterLink, router_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [])
    ], GuestsApp);
    return GuestsApp;
})();
angular2_1.bootstrap(GuestsApp, [
    http_1.httpInjectables,
    guest_service_1.GuestService
]);
