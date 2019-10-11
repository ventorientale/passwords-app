import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordsManagerComponent } from './passwords-manager.component';
import {MaterialModule} from '../../modules/material/material.module';

describe('PasswordsManagerComponent', () => {
  let component: PasswordsManagerComponent;
  let fixture: ComponentFixture<PasswordsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordsManagerComponent ],
      imports: [MaterialModule]
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
