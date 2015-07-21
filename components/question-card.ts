/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, EventEmitter, View} from 'angular2/angular2'

@Component({
  selector: 'question-card',
  properties: ['guest'],
  events: ['answerselected']
})
@View({
  template: `
    <div class="card grey lighten-3">
      <div class="card-content">
        <span class="card-title black-text">{{guest.name}}</span>
      </div>
      <div class="card-action">
        <p>Loves Angular2?</p>
        <a (click)="optionSelected(true)">yes</a>
        <a (click)="optionSelected(false)">no</a>
      </div>
    </div>
  `
})
export class QuestionCard {

  guest: any;
  answerselected: EventEmitter;

  constructor() {
    this.answerselected = new EventEmitter();
  }

  optionSelected(lovesNg2: boolean) {
    this.answerselected.next({
      guest: this.guest,
      lovesNg2: lovesNg2
    });
  }
}
