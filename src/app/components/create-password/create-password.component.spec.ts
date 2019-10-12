import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatePasswordComponent} from './create-password.component';
import {MaterialModule} from '../../modules/material/material.module';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {Observable, of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class MockPasswordList {
  addPassword(password: PasswordItemInterface): void {
  }

  getAllPasswords(): Observable<PasswordItemInterface[]> {
    return of([]);
  }
}

describe('CreatePasswordComponent', () => {
  let component: CreatePasswordComponent;
  let fixture: ComponentFixture<CreatePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePasswordComponent],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        {provide: PasswordsListService, useClass: MockPasswordList},
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
