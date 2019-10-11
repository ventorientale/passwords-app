import { AesCfb } from './aes-cfb';

describe('AesCfb', () => {
  it('should create an instance', () => {
    expect(new AesCfb()).toBeTruthy();
  });
});
