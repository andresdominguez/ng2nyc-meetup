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
var guest_card_1 = require('components/guest-card');
var guest_service_1 = require('components/guest-service');
var GuestList = (function () {
    function GuestList(guestService) {
        this.guestService = guestService;
    }
    GuestList.prototype.getList = function () {
        var list = this.guestService.getList();
        this.counter = list.length;
        return list;
    };
    GuestList = __decorate([
        angular2_1.Component({
            selector: 'guest-list',
            directives: [angular2_1.NgFor, guest_card_1.GuestCard]
        }),
        angular2_1.View({
            templateUrl: 'templates/guest-list.html',
            directives: [angular2_1.NgFor, guest_card_1.GuestCard]
        }), 
        __metadata('design:paramtypes', [guest_service_1.GuestService])
    ], GuestList);
    return GuestList;
})();
exports.GuestList = GuestList;
//# sourceMappingURL=guest-list.js.map