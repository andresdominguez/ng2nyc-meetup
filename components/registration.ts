/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';
import {GuestService} from 'components/guest-service';

@Component({
  selector: 'registration'
})
@View({
  templateUrl: 'templates/registration.html'
})
export class Registration {
  name: string;
  guestService: GuestService;

  constructor(guestService: GuestService) {
    this.guestService = guestService;
  }

  addGuest(name) {
    this.guestService.add(name);
  }
}
