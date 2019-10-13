import {EncryptionKeyGeneratorInterface} from '../../interfaces/encryption-key-generator-interface';
import {KeyFormatNotValidError} from '../errors/key-format-not-valid-error';

export abstract class AesAbstractKeyDriver implements EncryptionKeyGeneratorInterface {
  abstract readonly algorithmName: string;
  abstract readonly derivable: boolean;
  protected encoder: TextEncoder = new TextEncoder();

  async export(key: CryptoKey): Promise<string> {
    return JSON.stringify(await window.crypto.subtle.exportKey('jwk', key));
  }

  async fromPassword(password: string, salt: string): Promise<CryptoKey> {
    return this.deriveKey(await this.getKeyMaterial(password), salt);
  }

  async import(jwkString: string): Promise<CryptoKey> {
    const jwk = JSON.parse(jwkString);
    if (!jwk) {
      throw new KeyFormatNotValidError();
    }
    return await window.crypto.subtle.importKey(
      'jwk',
      jwk,
      {name: this.algorithmName, length: 256},
      true,
      ['encrypt', 'decrypt']
    );
  }

  protected async getKeyMaterial(password: string): Promise<CryptoKey> {
    return await window.crypto.subtle.importKey(
      'raw',
      this.encoder.encode(password),
      {name: 'PBKDF2'} as AesKeyAlgorithm, // refactor this when it will be fixed in lib.webworker.d.ts
      false,
      ['deriveBits', 'deriveKey']
    );
  }

  protected async deriveKey(key: CryptoKey, salt: string): Promise<CryptoKey> {
    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: this.encoder.encode(salt),
        iterations: 100000,
        hash: 'SHA-256'
      },
      key,
      {name: this.algorithmName, length: 256},
      true,
      ['encrypt', 'decrypt']
    );
  }
}
