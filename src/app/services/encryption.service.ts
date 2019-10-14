import {Injectable} from '@angular/core';
import {EncryptionDriverInterface} from '../interfaces/encryption-driver-interface';
import {StringKeyOf} from '../interfaces/string-key-of';
import {ENCRYPTION_AES_CTR} from '../constants/encryption-types';
import {AesCtr} from '../cryptography/cryptographers/aes-ctr';
import {environment} from '../../environments/environment';
import {AesCtrKeyDriver} from '../cryptography/key-drivers/aes-ctr-key-driver';
import {EncryptionOptionInterface} from '../interfaces/encryption-option-interface';
import {EncryptionKeyGeneratorInterface} from '../interfaces/encryption-key-generator-interface';
import {UserService} from './user.service';
import {UserInterface} from '../interfaces/user-interface';
import {switchMap} from 'rxjs/operators';
import {DataBaseService} from './data-base.service';
import {DB_OPTIONS_SALT} from '../constants/db-pathes';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  encryptionDrivers: StringKeyOf<EncryptionOptionInterface> = {
    [ENCRYPTION_AES_CTR]: {driver: AesCtr, keyDriver: AesCtrKeyDriver},
  };
  key: CryptoKey;
  driver: EncryptionDriverInterface = new this.encryptionDrivers[environment.defaultEncryptionDriver].driver();
  keyGenerator: EncryptionKeyGeneratorInterface = new this.encryptionDrivers[environment.defaultEncryptionDriver].keyDriver();
  awaitingKey: Promise<any>;

  constructor(userService: UserService, private db: DataBaseService) {
    userService.user
      .subscribe((user: UserInterface) => {
        if (!user) {
          this.key = null;
          return;
        }
        this.awaitingKey = this.generateKeyFromUser(user);
      });
  }

  protected async generateKeyFromUser(user) {
    if (!user) {
      throw new Error('User not logged in');
    }
    return await this.createKey(user.userId, await this.getSaltFromDB(user));

  }

  protected async getSaltFromDB(user) {
    return !user ? null : await this.db.get(DB_OPTIONS_SALT);
  }

  protected async awaitKey() {
    try {
      await this.awaitingKey;
    } catch (e) {
      throw new Error('Key not provided');
    }
  }

  async decrypt(data: string): Promise<string> {
    await this.awaitingKey;
    if (!this.key) {
      throw new Error('Key not provided');
    }
    return await this.driver.decrypt(this.key, data);
  }

  async encrypt(data: string): Promise<string> {
    await this.awaitingKey;
    if (!this.key) {
      throw new Error('Key not provided');
    }
    return await this.driver.encrypt(this.key, data);
  }

  async createKey(password: string, salt: string) {
    this.key = await this.keyGenerator.fromPassword(password, salt);
  }

  generateSalt() {
    return Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((value) => value.toString(16).padStart(1, '0')).join('');
  }
}
