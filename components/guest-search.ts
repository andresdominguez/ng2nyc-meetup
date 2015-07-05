/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, NgFor, View} from 'angular2/angular2';
import {Guest, GuestService} from 'components/guest-service';

@Component({
  selector: 'guest-search'
})
@View({
  templateUrl: 'templates/guest-search.html',
  directives: [NgFor]
})
export class GuestSearch {
  guestService: GuestService;
  searchTerm: string;

  constructor(guestService: GuestService) {
    this.guestService = guestService;
    this.searchTerm = '';
  }

  getList() {
    var list = this.guestService.getList();
    if (!this.searchTerm) {
      return list;
    }

    var regExp = new RegExp(this.searchTerm.toLocaleLowerCase());
    return list.filter(guest => !!guest.name.toLocaleLowerCase().match(regExp));
  }

  updateSearch(newSearch: string) {
    this.searchTerm = newSearch;
  }
}
