import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthenticationComponent} from './authentication.component';
import {BackgroundComponent} from '../background/background.component';
import {MaterialModule} from '../../modules/material/material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent, BackgroundComponent],
      imports: [MaterialModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
