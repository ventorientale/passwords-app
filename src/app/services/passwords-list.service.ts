import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PasswordItemInterface} from '../interfaces/password-item.interface';
import {DataBaseService} from './data-base.service';
import {DB_PASSWORDS_DATA_PATH} from '../constants/db-pathes';
import {transform} from '../modules/transformer-operator/operators/transform';
import {PasswordListTransformerService} from '../transformers/password-list-transformer.service';
import {PasswordItemWrapperInterface} from '../interfaces/password-item-wrapper-interface';
import {skip} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordsListService {

  constructor(private db: DataBaseService) {
  }

  getAllPasswords(): Observable<PasswordItemWrapperInterface[]> {
    return this.db.watch(DB_PASSWORDS_DATA_PATH)
      .pipe(skip(1), transform(PasswordListTransformerService));
  }

  addPassword(password: PasswordItemInterface) {
    this.db.push(DB_PASSWORDS_DATA_PATH, password);
  }

  deletePassword(password: PasswordItemWrapperInterface) {
    this.db.delete([...DB_PASSWORDS_DATA_PATH, password.key]);
  }
}
