import {AesAbstract} from './aes-abstract';

class MockAes extends AesAbstract {
  readonly algorithmName = '';

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  public exportResultToString(value: ArrayBuffer, iv: Uint8Array): string {
    return super.exportResultToString(value, iv);
  }

  public importResultFromString(str: string): { value: Uint8Array; iv: Uint8Array } {
    return super.importResultFromString(str);
  }

  protected getConfig(iv: ArrayBuffer): AesCbcParams | AesCtrParams | AesGcmParams {
    return undefined;
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
    const str = aes.exportResultToString(value, iv);
    expect(aes.importResultFromString(str)).toEqual({value, iv});
  });
});
