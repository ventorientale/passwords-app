import {Injectable} from '@angular/core';
import {DataBaseService} from './data-base.service';
import App = firebase.app.App;
import * as firebase from 'firebase/app';
import 'firebase/auth';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import AuthProvider = firebase.auth.AuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import UserCredential = firebase.auth.UserCredential;
import {UserService} from './user.service';
import {User} from '../entities/user';
import {browser} from 'protractor';
import {ProfileOptions} from '../interfaces/profile-options';
import {ENCRYPTION_NONE} from '../constants/encryption-types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  firebase: App;

  constructor(private db: DataBaseService, private userService: UserService) {
    this.firebase = db.firebaseApp;
  }

  authByGoogle(): Promise<UserCredential> {
    return this.signUpByProvider(new GoogleAuthProvider());
  }

  authByFaceBook(): Promise<UserCredential> {
    return this.signUpByProvider(new FacebookAuthProvider());
  }

  signUpByProvider(provider: AuthProvider): Promise<any> {
    return this.db.firebaseApp.auth().signInWithPopup(provider).then((result: UserCredential) => {
      this.userService.authenticate(new User(result.user.uid, result.user.displayName, '', result.user.photoURL));
      this.db.get(['options']).then((value) => {
        if (!value) {
          this.db.set<ProfileOptions>(['options'], {
            encryption: ENCRYPTION_NONE,
            lastAuthenticationTimestamp: (new Date()).getTime()
          });
          return;
        }
        this.db.set<number>(['options', 'lastAuthenticationTimestamp'], (new Date()).getTime());
      });
      return result;
    });
  }

  logout() {
    this.userService.removeFromStorage();
  }
}
