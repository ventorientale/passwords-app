import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BackgroundComponent} from './background.component';
import {MaterialModule} from '../../modules/material/material.module';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
