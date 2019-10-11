import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import Database = firebase.database.Database;
import App = firebase.app.App;
import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import Reference = firebase.database.Reference;
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  db: Database;
  firebaseApp: App;
  dbRefBase?: string = null;

  constructor(private userService: UserService) {
    this.firebaseApp = !firebase.apps.length ? firebase.initializeApp(environment.firebaseConfig) : firebase.app();
    this.db = firebase.database();
    this.userService.user.subscribe((user) => {
      this.dbRefBase = user ? 'data/' + user.userId : null;
    });
  }

  getRef(path: Array<string>): Reference {
    if (!this.dbRefBase) {
      throw new Error('authentication required');
    }
    return this.db.ref(this.dbRefBase + '/' + path.join('/'));
  }

  find(query: string): Array<any> {
    return undefined;
  }

  watch(path: Array<string>): Observable<any> {
    const result = new BehaviorSubject(null);
    this.getRef(path).on('value', (snapshot: DataSnapshot) => {
      result.next(snapshot.val());
    });
    return result;
  }

  get(path: Array<string>): Promise<any> {
    return this.getRef(path).once('value').then((value: DataSnapshot) => value.val());
  }

  set<T>(path: Array<string>, data: T): void {
    this.getRef(path).set(data);
  }

  push(path: Array<string>, data: any) {
    this.getRef(path).push(data);
  }

  delete(path: Array<string>): Promise<any> {
    return this.getRef(path).remove();
  }
}
