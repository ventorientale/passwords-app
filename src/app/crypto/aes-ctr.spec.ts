import { AesCtr } from './aes-ctr';

describe('AesCtr', () => {
  it('should create an instance', () => {
    expect(new AesCtr()).toBeTruthy();
  });
});
