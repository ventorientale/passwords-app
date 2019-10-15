import {CryptographerAbstract} from './cryptographer-abstract';

export class MockClass extends CryptographerAbstract {
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

  public fromHexString(value: string): Uint8Array {
    return super.fromHexString(value);
  }

  public toHexString(value: Uint8Array): string {
    return super.toHexString(value);
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

  it('should encode and decode Uint8Array to hex', () => {
    const mock = new MockClass();

    const inputs = new Array(10000000).map(() => crypto.getRandomValues(new Uint8Array(100000000)));
    const hexes = inputs.map((arr: Uint8Array) => mock.toHexString(arr));
    const outputs = hexes.map((str: string) => mock.fromHexString(str));

    expect(outputs).toEqual(inputs);
  });
});
