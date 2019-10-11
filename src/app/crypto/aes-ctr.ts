import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {AesAbstract} from './aes-abstract';

export class AesCtr extends AesAbstract implements EncryptDecryptInterface {
  readonly algorithmName = 'AES-CTR';

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    const decryptionData = this.importResultFromJson(data);
    return this.decodeBuffer(await window.crypto.subtle.decrypt(
      {name: this.algorithmName, counter: decryptionData.iv, length: 64},
      key,
      decryptionData.value
    ));
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    const counter = window.crypto.getRandomValues(new Uint8Array(16));
    const arrayBuffer: ArrayBuffer = await window.crypto.subtle.encrypt(
      {name: this.algorithmName, counter, length: 64},
      key,
      this.encodeText(data)
    );
    return this.exportResultToJson(new Uint8Array(arrayBuffer), counter);
  }
}
