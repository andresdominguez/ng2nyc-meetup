/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, NgFor, View} from 'angular2/angular2';

@Component({
  selector: 'guest-search'
})
@View({
  templateUrl: 'templates/guest-search.html',
  directives: [NgFor]
})
export class GuestSearch {
  constructor() {

  }
}
