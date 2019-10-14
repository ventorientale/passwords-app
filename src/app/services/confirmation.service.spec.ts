import { TestBed } from '@angular/core/testing';

import { ConfirmationService } from './confirmation.service';
import {MatBottomSheetModule} from '@angular/material';

describe('ConfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MatBottomSheetModule]
  }));

  it('should be created', () => {
    const service: ConfirmationService = TestBed.get(ConfirmationService);
    expect(service).toBeTruthy();
  });
});
