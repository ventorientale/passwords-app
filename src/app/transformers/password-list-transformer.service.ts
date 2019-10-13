import {Injectable} from '@angular/core';
import {StringKeyOf} from '../interfaces/string-key-of';
import {PasswordItemInterface} from '../interfaces/password-item.interface';
import {PasswordItemWrapperInterface} from '../interfaces/password-item-wrapper-interface';
import {AsyncTransformerInterface} from '../modules/transformer-operator/interfaces/async-transformer-interface';
import {UserService} from '../services/user.service';
import {EncryptionService} from '../services/encryption.service';

export type Input = StringKeyOf<string | PasswordItemInterface>;
export type Output = PasswordItemWrapperInterface[];

@Injectable({
  providedIn: 'root'
})
export class PasswordListTransformerService implements AsyncTransformerInterface<Input, Output> {

  constructor(private userService: UserService, private encryptionService: EncryptionService) {
  }

  async transform(data: Input): Promise<Output> {
    return data ? await Promise.all(Object.keys(data).map((key) => this.transformItem(key, data[key]))) : null;
  }

  async transformItem(key: string, item: string | PasswordItemInterface): Promise<PasswordItemWrapperInterface> {
    if ('string' === typeof item) {
      item = JSON.parse(await this.encryptionService.decrypt(item)) as PasswordItemInterface;
    }
    if (!item) {
      throw new Error('encryption failed');
    }
    return {key, item};
  }
}
