import {Injectable} from '@angular/core';
import {EncryptionDriverInterface} from '../interfaces/encryption-driver-interface';
import {StringKeyOf} from '../interfaces/string-key-of';
import {ENCRYPTION_AES_CTR} from '../constants/encryption-types';
import {AesCtr} from '../cryptography/cryptographers/aes-ctr';
import {environment} from '../../environments/environment';
import {AesCtrKeyDriver} from '../cryptography/key-drivers/aes-ctr-key-driver';
import {EncryptionOptionInterface} from '../interfaces/encryption-option-interface';
import {EncryptionKeyGeneratorInterface} from '../interfaces/encryption-key-generator-interface';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  encryptionDrivers: StringKeyOf<EncryptionOptionInterface> = {
    [ENCRYPTION_AES_CTR]: {driver: AesCtr, keyDriver: AesCtrKeyDriver},
  };

  driver: EncryptionDriverInterface = new this.encryptionDrivers[environment.defaultEncryptionDriver].driver();
  keyGenerator: EncryptionKeyGeneratorInterface = new this.encryptionDrivers[environment.defaultEncryptionDriver].keyDriver();

  constructor() {
  }

  decrypt(data: string): Promise<string> {
    return undefined;
  }

  encrypt(data: string): Promise<string> {
  }

  createKey(password: string, salt: string) {
    return this.keyGenerator.fromPassword(password, salt);
  }

  generateSalt() {
    return Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map((value) => value.toString(16).padStart(1, '0')).join('');
  }
}
