import {AesCtr} from './aes-ctr';
import any = jasmine.any;
import {testAesEncryption} from '../../tests/crypto/functions';
import {AesCbc} from './aes-cbc';

describe('AesCtr', () => {
  it('should create an instance', () => {
    expect(new AesCtr()).toBeTruthy();
  });

  it('should Encrypt And Decrypt', async () => {
    const text = 'this is encryption text';
    expect(await testAesEncryption(new AesCtr(), text)).toEqual(text);
  });
});
