import {AesCtr} from './aes-ctr';
import any = jasmine.any;

async function getKey() {
  return await window.crypto.subtle.generateKey(
    {name: 'AES-CTR', length: 256},
    true,
    ['encrypt', 'decrypt']
  );
}

describe('AesCtr', () => {
  it('should create an instance', () => {
    expect(new AesCtr()).toBeTruthy();
  });
  const aesCtr = new AesCtr();

  it('should Encrypt And Decrypt', async () => {
    const key = await getKey();
    const text = 'this is encryption text';
    const encrypted = await aesCtr.encrypt(key, text);
    expect(encrypted).toEqual(any(String));
    expect(await aesCtr.decrypt(key, encrypted)).toEqual(text);
  });
});
