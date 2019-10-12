import {AesAbstract} from './aes-abstract';

export class AesGcm extends AesAbstract {
  readonly algorithmName: string = 'AES-GCM';

  protected getConfig(iv: ArrayBuffer): AesGcmParams {
    return {name: this.algorithmName, iv};
  }
}
