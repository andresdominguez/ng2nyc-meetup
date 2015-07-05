/// <reference path="../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';

interface Guest {
  name: string,
  about: string,
  key: string
}

export class GuestService {
  firebase: Firebase;
  guestList: Guest[];

  constructor() {
    this.firebase = new Firebase(FIREBASE_URL);
    this.guestList = [];

    this.firebase.on('child_added',
        snapshot => {
          console.log('Got stuff');
          var guest = snapshot.val();
          guest.key = snapshot.key();
          this.guestList.push(guest);
          console.log(guest);
        },
        errorObject => console.log('The read failed', errorObject.code)
    );

    this.firebase.on('child_removed',
        snapshot => {
          var key = snapshot.key();
          this.guestList = this.guestList.filter(guest => guest.key != key)
        },
        errorObject => console.log('The read failed', errorObject.code)
    );
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
