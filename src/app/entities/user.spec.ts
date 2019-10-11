import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('id', 'name', 'token', 'url')).toBeTruthy();
  });
});
