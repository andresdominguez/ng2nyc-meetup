if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var guest_service_1 = require('components/guest-service');
var Registration = (function () {
    function Registration(guestService) {
        this.guestService = guestService;
    }
    Registration.prototype.addGuest = function (name, about) {
        this.guestService.add(name, about);
    };
    Registration = __decorate([
        angular2_1.Component({
            selector: 'registration'
        }),
        angular2_1.View({
            templateUrl: 'templates/registration.html'
        }), 
        __metadata('design:paramtypes', [guest_service_1.GuestService])
    ], Registration);
    return Registration;
})();
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map