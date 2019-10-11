import {TestBed, async, inject} from '@angular/core/testing';

import {AuthenticationGuard} from './authentication.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard],
      imports: [RouterTestingModule]
    });
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
