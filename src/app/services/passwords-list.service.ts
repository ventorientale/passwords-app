import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PasswordItemInterface} from '../interfaces/password-item.interface';
import {DataBaseService} from './data-base.service';
import {DB_PASSWORDS_DATA_PATH} from '../constants/db-pathes';
import {PasswordListTransformerService} from '../transformers/password-list-transformer.service';
import {PasswordItemWrapperInterface} from '../interfaces/password-item-wrapper-interface';
import {skipWhile, tap} from 'rxjs/operators';
import {asyncTransform} from '../modules/transformer-operator/operators/async-transform';
import {EncryptionService} from './encryption.service';
import {ExportService} from './export.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordsListService {
  lastPasswords: PasswordItemWrapperInterface[] = null;

  constructor(
    private db: DataBaseService,
    private encryption: EncryptionService,
  ) {
  }

  getAllPasswords(): Observable<PasswordItemWrapperInterface[]> {
    return this.db.watch(DB_PASSWORDS_DATA_PATH)
      .pipe(
        skipWhile((value, index) => index === 0 && value === null),
        asyncTransform(PasswordListTransformerService),
        tap((passwords: PasswordItemWrapperInterface[]) => this.lastPasswords = passwords)
      );
  }

  async addPassword(password: PasswordItemInterface) {
    this.db.push(DB_PASSWORDS_DATA_PATH, await this.encryption.encrypt(JSON.stringify(password)));
  }

  deletePassword(password: PasswordItemWrapperInterface) {
    this.db.delete([...DB_PASSWORDS_DATA_PATH, password.key]);
  }

  async updatePassword(password: PasswordItemInterface, key: string) {
    this.db.set([...DB_PASSWORDS_DATA_PATH, key], await this.encryption.encrypt(JSON.stringify(password)));
  }
}
