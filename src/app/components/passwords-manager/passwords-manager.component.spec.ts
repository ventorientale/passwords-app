import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordsManagerComponent} from './passwords-manager.component';
import {MaterialModule} from '../../modules/material/material.module';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {Observable, of} from 'rxjs';
import {PasswordViewComponent} from '../password-view/password-view.component';

class MockPasswordList {
  addPassword(password: PasswordItemInterface): void {
  }

  getAllPasswords(): Observable<PasswordItemInterface[]> {
    return of([]);
  }
}

describe('PasswordsManagerComponent', () => {
  let component: PasswordsManagerComponent;
  let fixture: ComponentFixture<PasswordsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordsManagerComponent, PasswordViewComponent],
      imports: [MaterialModule],
      providers: [{provide: PasswordsListService, useClass: MockPasswordList}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
