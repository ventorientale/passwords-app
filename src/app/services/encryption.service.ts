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

  constructor(userService: UserService) {
    userService.user.subscribe((user: UserInterface) => {
      if (user) {
        this.createKey(user.accessToken, user.userId);
      }
    });
  }

  decrypt(data: string): Promise<string> {
    if (!this.key) {
      throw new Error('Key not provided');
    }
    return this.driver.decrypt(this.key, data);
  }

  encrypt(data: string): Promise<string> {
    if (!this.key) {
      throw new Error('Key not provided');
    }
    return this.driver.encrypt(this.key, data);
  }

  async createKey(password: string, salt: string) {
    this.key = await this.keyGenerator.fromPassword(password, salt);
  }

  generateSalt() {
    return Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((value) => value.toString(16).padStart(1, '0')).join('');
  }
}
