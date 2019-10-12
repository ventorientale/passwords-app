import { TestBed } from '@angular/core/testing';

import { PasswordListTransformerService } from './password-list-transformer.service';

describe('PasswordListTransformerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordListTransformerService = TestBed.get(PasswordListTransformerService);
    expect(service).toBeTruthy();
  });
});
