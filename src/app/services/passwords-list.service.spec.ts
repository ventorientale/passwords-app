import { TestBed } from '@angular/core/testing';

import { PasswordsListService } from './passwords-list.service';

describe('PasswordsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasswordsListService = TestBed.get(PasswordsListService);
    expect(service).toBeTruthy();
  });
});
