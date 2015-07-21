/// <reference path="../typings/angular2/angular2.d.ts" />
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
var angular2_1 = require('angular2/angular2');
var guest_service_1 = require('components/guest-service');
var GuestSearch = (function () {
    function GuestSearch(guestService) {
        this.guestService = guestService;
        this.searchTerm = '';
        this.noResults = true;
    }
    GuestSearch.prototype.getList = function () {
        var list = this.search();
        this.noResults = !list.length;
        return list;
    };
    GuestSearch.prototype.search = function () {
        var list = this.guestService.getList();
        if (!this.searchTerm) {
            return list;
        }
        var regExp = new RegExp(this.searchTerm.toLocaleLowerCase());
        return list.filter(function (guest) { return !!guest.name.toLocaleLowerCase().match(regExp); });
    };
    GuestSearch.prototype.updateSearch = function (newSearch) {
        this.searchTerm = newSearch;
    };
    GuestSearch.prototype.updateLovesNg2 = function (guest, lovesNg2) {
        this.guestService.updateLovesAngular2(guest, lovesNg2);
    };
    GuestSearch = __decorate([
        angular2_1.Component({
            selector: 'guest-search'
        }),
        angular2_1.View({
            templateUrl: 'templates/guest-search.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [guest_service_1.GuestService])
    ], GuestSearch);
    return GuestSearch;
})();
exports.GuestSearch = GuestSearch;
//# sourceMappingURL=guest-search.js.map