/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Http, httpInjectables} from "angular2/http";
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {Registration} from 'components/registration';
import {GuestList} from 'components/guest-list';
import {GuestService} from 'components/guest-service';
import {GuestSearch} from 'components/guest-search';

@RouteConfig([
  {path: '/', as: 'registration', component: Registration},
  {path: '/list', as: 'list', component: GuestList},
  {path: '/search', as: 'search', component: GuestSearch}
])
@Component({
  appInjector: [routerInjectables],
  selector: 'guests-app'
})
@View({
  templateUrl: 'templates/guest-app.html',
  directives: [RouterLink, RouterOutlet]
})
class GuestsApp {}

bootstrap(GuestsApp, [
  httpInjectables,
  GuestService
]);
