import {UserInterface} from '../interfaces/user-interface';

export class User implements UserInterface {

  constructor(
    public userId: string,
    public displayName: string,
    public accessToken: string,
    public photoUrl: string,
  ) {

  }
}
