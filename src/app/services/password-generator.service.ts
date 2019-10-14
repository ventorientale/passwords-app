import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {
  readonly wishList = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';

  constructor() {
  }

  generate(length = 20) {
    return Array(length)
      .fill('') // fill an empty will reduce memory usage
      .map(() => this.wishList[
        Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * this.wishList.length)
        ])
      .join('');
  }

}
