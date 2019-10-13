import {AesAbstractKeyDriver} from './aes-abstract-key-driver';
import {ENCRYPTION_AES_CTR} from '../../constants/encryption-types';

class MockAesKeyDriver extends AesAbstractKeyDriver {
  readonly algorithmName: string = ENCRYPTION_AES_CTR;
  readonly derivable = true;
}

describe('AesAbstractKeyDriver', () => {
  it('should create an instance', () => {
    expect(new MockAesKeyDriver()).toBeTruthy();
  });

  it('should create, export and import key', async () => {
    const keyDriver = new MockAesKeyDriver();
    const key = await keyDriver.fromPassword('simple_password', 'salt');
    expect(key instanceof CryptoKey).toBeTruthy();
    const exportedKey = await keyDriver.export(key);
    expect('string' === typeof exportedKey).toBeTruthy();
    const importedKey = await keyDriver.import(exportedKey);
    expect(importedKey instanceof CryptoKey).toBeTruthy();
  });
});
