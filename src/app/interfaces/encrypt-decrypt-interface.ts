export interface EncryptDecryptInterface {
  encrypt(key: string, data: string): string;

  decrypt(key: string, data: string): string;
}
