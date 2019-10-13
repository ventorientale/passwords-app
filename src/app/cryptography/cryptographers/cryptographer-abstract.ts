import {EncryptionDriverInterface} from '../../interfaces/encryption-driver-interface';

export abstract class CryptographerAbstract implements EncryptionDriverInterface {
  abstract readonly algorithmName: string;

  protected textEncoder: TextEncoder = new TextEncoder();
  protected decoder: TextDecoder = new TextDecoder();
  protected crypto: SubtleCrypto = window.crypto.subtle;

  abstract decrypt(key: CryptoKey, data: string): Promise<string>;

  abstract encrypt(key: CryptoKey, data: string): Promise<string>;

  protected encodeText(text: string): Uint8Array {
    return this.textEncoder.encode(text);
  }

  protected decodeBuffer(value: ArrayBuffer): string {
    return this.decoder.decode(value);
  }
}
