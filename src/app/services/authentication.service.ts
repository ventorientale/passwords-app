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
import {ProfileOptions} from '../interfaces/profile-options';
import {Router} from '@angular/router';
import {EncryptionService} from './encryption.service';
import {environment} from '../../environments/environment';
import GithubAuthProvider = firebase.auth.GithubAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  firebase: App;

  constructor(
    private db: DataBaseService,
    private userService: UserService,
    private router: Router,
    private encryptionService: EncryptionService
  ) {
    this.firebase = db.firebaseApp;
  }

  authByGoogle(): Promise<UserCredential> {
    return this.signUpByProvider(new GoogleAuthProvider());
  }

  authByGitHub(): Promise<UserCredential> {
    return this.signUpByProvider(new GithubAuthProvider());
  }

  authByFaceBook(): Promise<UserCredential> {
    return this.signUpByProvider(new FacebookAuthProvider());
  }

  signUpByProvider(provider: AuthProvider): Promise<any> {
    return this.db.firebaseApp.auth().signInWithPopup(provider).then((result: UserCredential) => {
      this.userService.authenticate(new User(result.user.uid, result.user.displayName, '', result.user.photoURL));
      this.db.get(['options']).then((value: ProfileOptions) => {
        if (!value) {
          this.db.set<ProfileOptions>(['options'], {
            encryption: environment.defaultEncryptionDriver,
            lastAuthenticationTimestamp: (new Date()).getTime(),
            passwordSalt: this.encryptionService.generateSalt()
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
    return this.router.navigate(['login']);
  }
}
