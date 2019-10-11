import {AesCbc} from './aes-cbc';

async function getKey() {
  return await window.crypto.subtle.generateKey(
    {name: 'AES-CBC', length: 256},
    true,
    ['encrypt', 'decrypt']
  );
}

describe('AesCbc', () => {
  it('should create an instance', () => {
    expect(new AesCbc()).toBeTruthy();
  });

  const aesCbc = new AesCbc();

  it('should Encrypt And Decrypt', async () => {
    const key = await getKey();
    const text = 'this is encryption text';
    const encrypted = await aesCbc.encrypt(key, text);
    expect(await aesCbc.decrypt(key, encrypted)).toEqual(text);
  });
});
