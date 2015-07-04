/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {GuestCard} from 'components/guest-card';

@Component({
  selector: 'guest-list',
  directives: [NgFor, GuestCard]
})
@View({
  templateUrl: 'templates/guest-list.html'
})
export class GuestList {
  guests: any[];
  counter: number;

  constructor() {
    this.guests = [];
    this.counter = 0;
  }

  add() {
    var count = ++this.counter;
    var guest = {
      name: 'aa' + count,
      count: count
    };
    this.guests.push(guest);
  }
}
