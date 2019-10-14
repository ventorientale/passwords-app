import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmationComponent} from './confirmation.component';
import {MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA, MatBottomSheetRef, MatDialogRef} from '@angular/material';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      providers: [
        {provide: MAT_BOTTOM_SHEET_DATA, useValue: {}},
        {provide: MatBottomSheetRef, useValue: {dismiss: () => null}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
