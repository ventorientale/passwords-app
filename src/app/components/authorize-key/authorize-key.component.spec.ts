import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizeKeyComponent } from './authorize-key.component';
import {MaterialModule} from '../../modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AuthorizeKeyComponent', () => {
  let component: AuthorizeKeyComponent;
  let fixture: ComponentFixture<AuthorizeKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizeKeyComponent ],
      imports: [MaterialModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizeKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
