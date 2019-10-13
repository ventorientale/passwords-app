import {AesCtrKeyDriver} from './aes-ctr-key-driver';
import {AesCtr} from '../cryptographers/aes-ctr';
import {testAesEncryptionKeysEquivalence} from '../../../tests/crypto/functions';

describe('AesCtrKeyDriver', () => {
  const salt = 'salt';
  const password = 'password';
  const keyDriver = new AesCtrKeyDriver();
  const cryptoDriver = new AesCtr();
  const text = 'this is encryption text';

  it('should create an instance', () => {
    expect(new AesCtrKeyDriver()).toBeTruthy();
  });

  it('key should be generated from password correctly', async () => {
    const [firstKey, secondKey] = [await keyDriver.fromPassword(password, salt), await keyDriver.fromPassword(password, salt)];
    expect(await testAesEncryptionKeysEquivalence(cryptoDriver, text, firstKey, secondKey)).toEqual(text);
  });

  it('key should be imported and exported correctly', async () => {
    const firstKey = await keyDriver.fromPassword(password, salt);
    const secondKey = await keyDriver.import(await keyDriver.export(firstKey));
    expect(await testAesEncryptionKeysEquivalence(cryptoDriver, text, firstKey, secondKey)).toEqual(text);
  });
});
