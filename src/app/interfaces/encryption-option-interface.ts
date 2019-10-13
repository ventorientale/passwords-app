import {EncryptionDriverInterface} from './encryption-driver-interface';
import {EncryptionKeyGeneratorInterface} from './encryption-key-generator-interface';

export interface EncryptionOptionInterface {
  driver: new() => EncryptionDriverInterface;
  keyDriver: new() => EncryptionKeyGeneratorInterface;
}
