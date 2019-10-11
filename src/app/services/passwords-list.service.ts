import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PasswordItemInterface} from '../interfaces/password-item.interface';
import {DataBaseService} from './data-base.service';
import {DB_PASSWORDS_DATA_PATH} from '../constants/db-pathes';

@Injectable({
  providedIn: 'root'
})
export class PasswordsListService {

  constructor(private db: DataBaseService) {
  }

  getAllPasswords(): Observable<PasswordItemInterface[]> {
    // return of([
    //   {title: 'Amazon', login: '1234', password: '1234', url: 'amazon.com', icon: 'emoji_emotions'},
    // ]);
    return this.db.watch(DB_PASSWORDS_DATA_PATH);
  }
}
