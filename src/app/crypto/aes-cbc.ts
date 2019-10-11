import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {AesAbstract} from './aes-abstract';

export class AesCbc extends AesAbstract implements EncryptDecryptInterface {
  readonly algorithmName = 'AES-CBC';

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    const decryptionData = this.importResultFromJson(data);
    return this.decodeBuffer(await window.crypto.subtle.decrypt(
      {name: this.algorithmName, iv: decryptionData.iv},
      key,
      decryptionData.value
    ));
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const arrayBuffer: ArrayBuffer = await window.crypto.subtle.encrypt(
      {name: this.algorithmName, iv},
      key,
      this.encodeText(data)
    );
    return this.exportResultToJson(new Uint8Array(arrayBuffer), iv);
  }
}
