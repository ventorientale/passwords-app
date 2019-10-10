import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {UserInterface} from '../entities/user-interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {USER_STORAGE_KEY} from '../constants/user-consts';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>(null);

  constructor(private storage: StorageService) {
    this.user.next(storage.getJson(USER_STORAGE_KEY));
    this.user.subscribe((user: UserInterface) => this.storage.setJson(USER_STORAGE_KEY, user));
  }

  authenticate(user: UserInterface) {
    this.user.next(user);
  }

  removeFromStorage() {
    this.storage.removeItem(USER_STORAGE_KEY);
    this.user.next(null);
  }
}
