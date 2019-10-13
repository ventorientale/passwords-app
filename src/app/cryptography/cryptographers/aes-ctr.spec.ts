import {AesCtr} from './aes-ctr';
import {testAesEncryption} from '../../../tests/crypto/functions';

describe('AesCtr', () => {
  it('should create an instance', () => {
    expect(new AesCtr()).toBeTruthy();
  });

  it('should Encrypt And Decrypt', async () => {
    const text = 'this is encryption text';
    expect(await testAesEncryption(new AesCtr(), text)).toEqual(text);
  });
});
