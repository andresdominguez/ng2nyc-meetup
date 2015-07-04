/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'registration'
})
@View({
  templateUrl: 'templates/registration.html'
})
export class Registration {
  name: string;

  constructor() {

  }

  addGuest(name) {
    var name2 = this.name;

    debugger;
  }
}
