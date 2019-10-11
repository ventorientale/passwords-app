import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {CryptoAbstract} from './crypto-abstract';

export abstract class AesAbstract extends CryptoAbstract implements EncryptDecryptInterface {
  abstract readonly algorithmName: string;

  abstract decrypt(key: CryptoKey, data: string): Promise<string>;

  abstract encrypt(key: CryptoKey, data: string): Promise<string>;

  protected exportResultToJson(value: Uint8Array, iv: Uint8Array): string {
    return JSON.stringify({value: Object.values(value), iv: Object.values(iv)});
  }

  protected importResultFromJson(str: string): { value: Uint8Array, iv: Uint8Array } {
    const result = JSON.parse(str);
    result.iv = new Uint8Array(result.iv);
    result.value = new Uint8Array(result.value);
    return result;
  }
}
