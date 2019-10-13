import {AesCbc} from './aes-cbc';
import {testAesEncryption} from '../../../tests/crypto/functions';

describe('AesCbc', () => {
  it('should create an instance', () => {
    expect(new AesCbc()).toBeTruthy();
  });

  it('should Encrypt And Decrypt', async () => {
    const text = 'this is encryption text';
    expect(await testAesEncryption(new AesCbc(), text)).toEqual(text);
  });
});
