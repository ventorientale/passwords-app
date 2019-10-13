import {EncryptionDriverInterface} from '../../interfaces/encryption-driver-interface';
import {AesAbstract} from './aes-abstract';
import {ENCRYPTION_AES_CBC} from '../../constants/encryption-types';

export class AesCbc extends AesAbstract implements EncryptionDriverInterface {
  readonly algorithmName = ENCRYPTION_AES_CBC;

  protected getConfig(iv: ArrayBuffer): AesCbcParams {
    return {name: this.algorithmName, iv};
  }
}
