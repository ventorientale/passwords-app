import {Injectable} from '@angular/core';
import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {StringKeyOf} from '../interfaces/string-key-of';
import {ENCRYPTION_AES_CBC, ENCRYPTION_AES_CTR} from '../constants/encryption-types';
import {AesCbc} from '../crypto/aes-cbc';
import {AesCtr} from '../crypto/aes-ctr';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  encryptionDrivers: StringKeyOf<new() => EncryptDecryptInterface> = {
    [ENCRYPTION_AES_CBC]: AesCbc,
    [ENCRYPTION_AES_CTR]: AesCtr
  };

  driver: EncryptDecryptInterface = new this.encryptionDrivers[environment.defaultEncryptionDriver]();

  constructor() {

  }

  decrypt(data: string): Promise<string> {
    return undefined;
  }

  encrypt(data: string): Promise<string> {
    return undefined;
  }
}
