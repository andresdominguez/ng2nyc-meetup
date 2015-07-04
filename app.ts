/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";

@Component({
  selector: 'guests-app'
})
@View({
  templateUrl: 'templates/guest-app.html',
  directives: [NgFor]
})
class GuestsApp {
  name: string;
  guests: string[];
  counter: number;

  constructor() {
    this.name = 'Carolina';
    this.guests = [];
    this.counter = 0;
  }

  add() {
    this.name = 'dsf';
    this.guests.push('aa' + (this.counter++));
  }
}

bootstrap(GuestsApp, [httpInjectables]);
