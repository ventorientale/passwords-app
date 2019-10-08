import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PasswordItemInterface} from '../interfaces/password-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordsListService {

  constructor() {
  }

  getAllPasswords(): Observable<PasswordItemInterface[]> {
    return of([
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'emoji_emotions'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'fitness_center'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'room_service'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'emoji_emotions'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'all_inclusive'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'room_service'},
      {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'all_inclusive'},
    ]);
  }
}
