/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, NgFor, View} from 'angular2/angular2';
import {GuestCard} from 'components/guest-card';
import {GuestService} from 'components/guest-service';

@Component({
  selector: 'guest-list',
  directives: [NgFor, GuestCard]
})
@View({
  templateUrl: 'templates/guest-list.html',
  directives: [NgFor]
})
export class GuestList {
  guests: any[];
  counter: number;
  guestService: GuestService;

  constructor(guestService: GuestService) {
    this.guestService = guestService;
    this.guests = [];
    this.counter = 0;
  }

  getList() {
    return this.guestService.getList();
  }
}
