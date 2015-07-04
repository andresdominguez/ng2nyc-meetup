/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'guest-card',
  properties: ['guest']
})
@View({
  templateUrl: 'templates/guest-card.html',
})
export class GuestCard {
  guest: any;

  constructor() {
  }
}
