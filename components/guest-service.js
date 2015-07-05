/// <reference path="../typings/firebase/firebase.d.ts" />
var FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';
var GuestService = (function () {
    function GuestService() {
        var _this = this;
        this.firebase = new Firebase(FIREBASE_URL);
        this.guestList = [];
        this.firebase.on('child_added', function (snapshot) {
            console.log('Got stuff');
            var guest = snapshot.val();
            _this.guestList.push(guest);
            console.log(guest);
        }, function (errorObject) { return console.log('The read failed', errorObject.code); });
    }
    GuestService.prototype.add = function (name, about) {
        this.firebase.push({
            name: name,
            about: about
        });
    };
    GuestService.prototype.getList = function () {
        return this.guestList;
    };
    return GuestService;
})();
exports.GuestService = GuestService;
//# sourceMappingURL=guest-service.js.map