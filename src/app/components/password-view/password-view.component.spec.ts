import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordViewComponent} from './password-view.component';
import {MaterialModule} from '../../modules/material/material.module';

describe('PasswordViewComponent', () => {
  let component: PasswordViewComponent;
  let fixture: ComponentFixture<PasswordViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordViewComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
