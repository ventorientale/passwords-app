import { TestBed } from '@angular/core/testing';

import { DateBaseService } from './date-base.service';

describe('DateBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateBaseService = TestBed.get(DateBaseService);
    expect(service).toBeTruthy();
  });
});
