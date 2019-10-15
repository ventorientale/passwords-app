import {Injectable} from '@angular/core';
import {saveAs} from 'file-saver';
import {DataBaseService} from './data-base.service';
import {DB_PASSWORDS_DATA_PATH} from '../constants/db-pathes';
import {PasswordListTransformerService} from '../transformers/password-list-transformer.service';
import {EncryptionService} from './encryption.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  constructor(
    private databaseService: DataBaseService,
    private passwordTransformerService: PasswordListTransformerService,
    private encryptionService: EncryptionService
  ) {
  }

  async exportRawDataFromAccount() {
    this.exportObjectToJson(await this.databaseService.get([]));
  }

  async exportDecryptedPasswords() {
    const passwords = await this.databaseService.get(DB_PASSWORDS_DATA_PATH)
      .then((value) => this.passwordTransformerService.transform(value));
    this.exportObjectToJson(passwords, 'exported-passwords.json');
  }

  async exportEncryptedPasswords() {
    const passwords = await this.databaseService.get(DB_PASSWORDS_DATA_PATH);
    this.exportObjectToJson(passwords, 'exported-encrypted-passwords.json');
  }

  async exportKeyToJson() {
    saveAs(
      new Blob([await this.encryptionService.exportKey()]),
      `key-${environment.defaultEncryptionDriver}`
    );
  }

  private exportObjectToJson(data: any, fileName = 'exported.json') {
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    saveAs(blob, fileName);
  }
}
