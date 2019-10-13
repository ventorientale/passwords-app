import {AesAbstract} from '../../app/cryptography/cryptographers/aes-abstract';

export async function generateKey(algorithm: string) {
  return await window.crypto.subtle.generateKey(
    {name: algorithm, length: 256},
    true,
    ['encrypt', 'decrypt']
  );
}

export async function testAesEncryption(driver: AesAbstract, text: string): Promise<string> {
  const key = await generateKey(driver.algorithmName);
  const encrypted = await driver.encrypt(key, text);
  return await driver.decrypt(key, encrypted);
}

export async function testAesEncryptionKeysEquivalence(
  driver: AesAbstract,
  text: string,
  firstKey: CryptoKey,
  secondKey: CryptoKey
) {
  const encrypted = await driver.encrypt(firstKey, text);
  return await driver.decrypt(secondKey, encrypted);
}
