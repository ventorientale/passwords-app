import {AesAbstract} from './aes-abstract';

class MockAes extends AesAbstract {
  readonly algorithmName = '';

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  public exportResultToJson(value: Uint8Array, iv: Uint8Array): string {
    return super.exportResultToJson(value, iv);
  }

  public importResultFromJson(str: string): { value: Uint8Array; iv: Uint8Array } {
    return super.importResultFromJson(str);
  }
}

describe('AesAbstract', () => {
  it('should create an instance', () => {
    expect(new MockAes()).toBeTruthy();
  });

  it('should decode and encode json', () => {
    const aes = new MockAes();
    const value = window.crypto.getRandomValues(new Uint8Array(100));
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const json = aes.exportResultToJson(value, iv);
    expect(aes.importResultFromJson(json)).toEqual({value, iv});
  });
});
