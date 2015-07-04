/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";
import {RouteConfig, RouterOutlet, RouterLink, Router, routerInjectables} from 'angular2/router';
import {GuestCard} from 'components/guest-card';
import {Registration} from 'components/registration';
import {GuestList} from 'components/guest-list';

@RouteConfig([
  {path: '/', as: 'registration', component: Registration},
  {path: '/list', as: 'list', component: GuestList}
])
@Component({
  appInjector:[routerInjectables],
  selector: 'guests-app'
})
@View({
  templateUrl: 'templates/guest-app.html',
  directives: [NgFor, GuestCard, RouterOutlet, RouterLink]
})
class GuestsApp {}


bootstrap(GuestsApp, [httpInjectables]);
