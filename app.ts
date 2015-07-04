/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";

@Component({
  selector: 'guests-app'
})
@View({
  template: `
	  <div>
	    <button class="btn" (click)="add()">Add</button>
	    <div>{{name}}</div>
	  </div>
	`
})
class GuestsApp {
  name: string;

  constructor() {
    this.name = 'Carolina';
  }

  add() {
    this.name = 'dsf';
  }
}

bootstrap(GuestsApp, [httpInjectables]);
