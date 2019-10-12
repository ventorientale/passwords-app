import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {AesAbstract} from './aes-abstract';

export class AesCbc extends AesAbstract implements EncryptDecryptInterface {
  readonly algorithmName = 'AES-CBC';

  protected getConfig(iv: ArrayBuffer): AesCbcParams {
    return {name: this.algorithmName, iv};
  }
}
