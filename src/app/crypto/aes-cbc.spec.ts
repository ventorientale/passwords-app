import { AesCbc } from './aes-cbc';

describe('AesCbc', () => {
  it('should create an instance', () => {
    expect(new AesCbc()).toBeTruthy();
  });
});
