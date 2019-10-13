import {EncryptionDriverInterface} from '../../interfaces/encryption-driver-interface';
import {AesAbstract} from './aes-abstract';
import {ENCRYPTION_AES_CTR} from '../../constants/encryption-types';

export class AesCtr extends AesAbstract implements EncryptionDriverInterface {
  readonly algorithmName = ENCRYPTION_AES_CTR;

  protected getConfig(iv: ArrayBuffer): AesCbcParams | AesCtrParams | AesGcmParams {
    return {name: this.algorithmName, counter: iv, length: 64};
  }
}
