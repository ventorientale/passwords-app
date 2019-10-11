import {CryptoAbstract} from './crypto-abstract';

export class MockClass extends CryptoAbstract {
  algorithmName = '';

  async decrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  async encrypt(key: CryptoKey, data: string): Promise<string> {
    return '';
  }

  public encodeText(text: string): Uint8Array {
    return super.encodeText(text);
  }

  public decodeBuffer(value: ArrayBuffer): string {
    return super.decodeBuffer(value);
  }
}

describe('CryptoAbstract', () => {
  it('should create an instance', () => {
    expect(new MockClass()).toBeTruthy();
  });
  it('should encode and decode', () => {
    const crypto = new MockClass();
    const value = String.fromCharCode.apply(
      null,
      new Uint16Array(window.crypto.getRandomValues(new Uint8Array(100)))
    );
    expect(crypto.decodeBuffer(crypto.encodeText(value))).toEqual(value);
  });
});
