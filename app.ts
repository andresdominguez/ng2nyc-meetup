/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, EventEmitter, NgFor, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {GuestCard} from 'components/guest-card';
import {Registration} from 'components/registration';
import {GuestList} from 'components/guest-list';
import {GuestService} from 'components/guest-service';
import {GuestSearch} from 'components/guest-search';

@RouteConfig([
  //{path: '/', as: 'registration', component: Registration},
  {path: '/registration', as: 'registration', component: Registration},
  {path: '/', as: 'search', component: GuestSearch},
  {path: '/list', as: 'list', component: GuestList},
  {path: '/search', as: 'search', component: GuestSearch}
])
@Component({
  appInjector: [routerInjectables],
  selector: 'guests-app'
})
@View({
  templateUrl: 'templates/guest-app.html',
  directives: [GuestCard, NgFor, RouterLink, RouterOutlet]
})
class GuestsApp {}

bootstrap(GuestsApp, [
  httpInjectables,
  GuestService
]);
