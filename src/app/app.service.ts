import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private firestore: AngularFirestore) { }

  getUser() {
    return this.firestore.collection('User').snapshotChanges();
  }
  createUser(user: User) {
    return this.firestore.collection('User').add(user);
  }
  updatePolicy(user: User){
    this.firestore.doc('User/' + user.id).update(user);
  }
  deletePolicy(userId: number) {
    this.firestore.doc('User/' + userId).delete();
  }
}
