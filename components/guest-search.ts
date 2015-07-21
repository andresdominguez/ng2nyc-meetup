/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, NgFor, NgIf, View} from 'angular2/angular2';
import {Guest, GuestService} from 'components/guest-service';
import {QuestionCard} from 'components/question-card';

@Component({
  selector: 'guest-search'
})
@View({
  templateUrl: 'templates/guest-search.html',
  directives: [NgFor, NgIf, QuestionCard]
})
export class GuestSearch {
  guestService: GuestService;
  searchTerm: string;
  noResults: boolean;

  constructor(guestService: GuestService) {
    this.guestService = guestService;
    this.searchTerm = '';
    this.noResults = true;
  }

  getList(): Guest[] {
    var list = this.search();
    this.noResults = !list.length;
    return list;
  }

  private search(): Guest[] {
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

  updateLovesNg2(guest: Guest, lovesNg2: boolean) {
    this.guestService.updateLovesAngular2(guest, lovesNg2);
  }
}
