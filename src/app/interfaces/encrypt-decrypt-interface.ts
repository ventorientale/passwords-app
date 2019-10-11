export interface EncryptDecryptInterface {
  readonly algorithmName: string;

  encrypt(key: CryptoKey, data: string): Promise<string>;

  decrypt(key: CryptoKey, data: string): Promise<string>;
}
