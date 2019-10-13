import {AesAbstract} from '../../app/cryptography/cryptographers/aes-abstract';

export async function generateKey(algorithm: string) {
  return await window.crypto.subtle.generateKey(
    {name: algorithm, length: 256},
    true,
    ['encrypt', 'decrypt']
  );
}

export async function testAesEncryption<T>(driver: AesAbstract, text: string): Promise<string> {
  const key = await generateKey(driver.algorithmName);
  const encrypted = await driver.encrypt(key, text);
  return await driver.decrypt(key, encrypted);
}
