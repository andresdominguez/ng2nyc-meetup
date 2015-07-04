/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";
import {GuestCard} from 'components/guest-card';

@Component({
  selector: 'guests-app'
})
@View({
  templateUrl: 'templates/guest-app.html',
  directives: [NgFor, GuestCard]
})
class GuestsApp {
  name: string;
  guests: any[];
  counter: number;

  constructor() {
    this.name = 'Carolina';
    this.guests = [];
    this.counter = 0;
  }

  add() {
    this.name = 'dsf';
    var count = ++this.counter;
    var guest = {
      name: 'aa' + count,
      count: count
    };
    this.guests.push(guest);
  }
}


bootstrap(GuestsApp, [httpInjectables]);
