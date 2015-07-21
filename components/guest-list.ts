/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, NgFor, View} from 'angular2/angular2';
import {GuestCard} from 'components/guest-card';
import {GuestService} from 'components/guest-service';

@Component({
  selector: 'guest-list'
})
@View({
  templateUrl: 'templates/guest-list.html',
  directives: [GuestCard, NgFor]
})
export class GuestList {

  constructor(public guestService: GuestService) {}

  getList() {
    return this.guestService.getList();
  }
}
