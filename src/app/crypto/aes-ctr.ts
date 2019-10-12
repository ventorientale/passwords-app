import {EncryptDecryptInterface} from '../interfaces/encrypt-decrypt-interface';
import {AesAbstract} from './aes-abstract';

export class AesCtr extends AesAbstract implements EncryptDecryptInterface {
  readonly algorithmName = 'AES-CTR';

  protected getConfig(iv: ArrayBuffer): AesCbcParams | AesCtrParams | AesGcmParams {
    return {name: this.algorithmName, counter: iv, length: 64};
  }
}
