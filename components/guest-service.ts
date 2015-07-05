/// <reference path="../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';

export class GuestService {
  firebase: Firebase;

  constructor() {
    this.firebase = new Firebase(FIREBASE_URL);
  }

  add(name: string) {
    this.firebase.push({
      name: name
    });
  }
}
