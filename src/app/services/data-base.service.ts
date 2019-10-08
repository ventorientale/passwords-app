import {Injectable} from '@angular/core';
import {DataBase} from '../interfaces/data-base';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements DataBase {

  constructor() {
  }

  find(query: string): Array<any> {
    return undefined;
  }

  get(key: string): any {
  }

  getAll(): Array<any> {
    return undefined;
  }

  set(key: string, data: any): void {
  }
}
