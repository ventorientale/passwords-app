import { AesGcm } from './aes-gcm';
import {testAesEncryption} from '../../tests/crypto/functions';
import {AesCbc} from './aes-cbc';

describe('AesGcm', () => {
  it('should create an instance', () => {
    expect(new AesGcm()).toBeTruthy();
  });
  it('should Encrypt And Decrypt', async () => {
    const text = 'this is encryption text';
    expect(await testAesEncryption(new AesGcm(), text)).toEqual(text);
  });
});
