/// <reference path="../typings/angular2/angular2.d.ts" />
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
var QuestionCard = (function () {
    function QuestionCard() {
        this.answerselected = new angular2_1.EventEmitter();
    }
    QuestionCard.prototype.optionSelected = function (lovesNg2) {
        this.answerselected.next({
            guest: this.guest,
            lovesNg2: lovesNg2
        });
    };
    QuestionCard = __decorate([
        angular2_1.Component({
            selector: 'question-card',
            properties: ['guest'],
            events: ['answerselected']
        }),
        angular2_1.View({
            template: "\n    <div class=\"card grey lighten-3\">\n      <div class=\"card-content\">\n        <span class=\"card-title black-text\">{{guest.name}}</span>\n      </div>\n      <div class=\"card-action\">\n        <p>Loves Angular2?</p>\n        <a (click)=\"optionSelected(true)\">yes</a>\n        <a (click)=\"optionSelected(false)\">no</a>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionCard);
    return QuestionCard;
})();
exports.QuestionCard = QuestionCard;
//# sourceMappingURL=question-card.js.map