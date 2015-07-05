/// <reference path="../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';

export class GuestService {
  firebase: Firebase;
  guestList: Object[];

  constructor() {
    this.firebase = new Firebase(FIREBASE_URL);
    this.guestList = [];

    this.firebase.on('child_added',
        snapshot => {
          console.log('Got stuff');
          var guest = snapshot.val();
          this.guestList.push(guest);
          console.log(guest);
        },
        errorObject => console.log('The read failed', errorObject.code));
  }

  add(name: string, about: string) {
    this.firebase.push({
      name: name,
      about: about
    });
  }

  getList() : Object[] {
    return this.guestList;
  }
}
