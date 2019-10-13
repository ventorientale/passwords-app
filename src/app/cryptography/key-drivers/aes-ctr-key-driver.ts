import {AesAbstractKeyDriver} from './aes-abstract-key-driver';
import {EncryptionKeyGeneratorInterface} from '../../interfaces/encryption-key-generator-interface';
import {ENCRYPTION_AES_CTR} from '../../constants/encryption-types';

export class AesCtrKeyDriver extends AesAbstractKeyDriver implements EncryptionKeyGeneratorInterface {
  readonly algorithmName: string = ENCRYPTION_AES_CTR;
  readonly derivable: boolean = true;
}
