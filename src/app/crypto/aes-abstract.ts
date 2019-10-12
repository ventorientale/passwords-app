import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {CryptoAbstract} from './crypto-abstract';

export abstract class AesAbstract extends CryptoAbstract implements EncryptDecryptInterface {
  abstract readonly algorithmName: string;

  protected abstract getConfig(iv: ArrayBuffer): AesCbcParams | AesCtrParams | AesGcmParams;

  protected exportResultToJson(value: ArrayBuffer, iv: Uint8Array): string {
    value = value instanceof Uint8Array ? value : new Uint8Array(value);
    return JSON.stringify({value: Object.values(value), iv: Object.values(iv)});
  }

  protected importResultFromJson(str: string): { value: Uint8Array, iv: Uint8Array } {
    const result = JSON.parse(str);
    result.iv = new Uint8Array(result.iv);
    result.value = new Uint8Array(result.value);
    return result;
  }

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    const decryptionData = this.importResultFromJson(data);
    return this.decodeBuffer(await this.crypto.decrypt(this.getConfig(decryptionData.iv), key, decryptionData.value));
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    return this.exportResultToJson(await this.crypto.encrypt(this.getConfig(iv), key, this.encodeText(data)), iv);
  }
}
