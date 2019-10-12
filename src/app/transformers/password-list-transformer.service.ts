import {Injectable} from '@angular/core';
import {TransformerInterface} from '../interfaces/transformer-interface';
import {StringKeyOf} from '../interfaces/string-key-of';
import {PasswordItemInterface} from '../interfaces/password-item.interface';
import {PasswordItemWrapperInterface} from '../interfaces/password-item-wrapper-interface';

type Input = StringKeyOf<PasswordItemInterface>;
type Output = PasswordItemWrapperInterface[];

@Injectable({
  providedIn: 'root'
})
export class PasswordListTransformerService implements TransformerInterface<Input, Output> {

  constructor() {
  }

  transform(data: Input): Output {
    return data ? Object.keys(data).map((key) => this.transformItem(key, data[key])) : null;
  }

  transformItem(key: string, item: PasswordItemInterface): PasswordItemWrapperInterface {
    return {key, item};
  }
}
