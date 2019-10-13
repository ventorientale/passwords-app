import {AesAbstract} from './aes-abstract';
import {ENCRYPTION_AES_GCM} from '../../constants/encryption-types';

export class AesGcm extends AesAbstract {
  readonly algorithmName: string = ENCRYPTION_AES_GCM;

  protected getConfig(iv: ArrayBuffer): AesGcmParams {
    return {name: this.algorithmName, iv};
  }
}
