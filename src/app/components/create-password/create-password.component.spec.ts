import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CreatePasswordComponent} from './create-password.component';
import {MaterialModule} from '../../modules/material/material.module';
import {PasswordsListService} from '../../services/passwords-list.service';
import {PasswordItemInterface} from '../../interfaces/password-item.interface';
import {Observable, of} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

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
      imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
      providers: [
        {provide: PasswordsListService, useClass: MockPasswordList},
        {provide: MatDialogRef, useValue: {close: () => null}},
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

  it('title in model', fakeAsync(() => {
    const text = testModelWorks(fixture, 'input[name="title"]', 'example title');
    expect(fixture.componentInstance.password.title).toEqual(text);
  }));

  it('login in model', fakeAsync(() => {
    const text = testModelWorks(fixture, 'input[name="login"]', 'example login');
    expect(fixture.componentInstance.password.login).toEqual(text);
  }));

  it('password in model', fakeAsync(() => {
    const text = testModelWorks(fixture, 'input[name="password"]', 'example password');
    expect(fixture.componentInstance.password.password).toEqual(text);
  }));

  it('url in model', fakeAsync(() => {
    const text = testModelWorks(fixture, 'input[name="url"]', 'example url');
    expect(fixture.componentInstance.password.url).toEqual(text);
  }));

  it('dialog has been closed', fakeAsync(() => {
    const dialogRef = fixture.debugElement.injector.get(MatDialogRef);
    const spyClose = spyOn(dialogRef, 'close');
    const el = fixture.debugElement.query(By.css('button[color="warn"]')).nativeElement;
    el.dispatchEvent(new Event('click', {bubbles: true, cancelable: true}));

    fixture.detectChanges();

    expect(spyClose).toHaveBeenCalled();
  }));

  it('should be saved', fakeAsync(() => {
    const passwordListMockedService = fixture.debugElement.injector.get(PasswordsListService);
    const addPasswordSpy = spyOn(passwordListMockedService, 'addPassword');

    const dialogRef = fixture.debugElement.injector.get(MatDialogRef);
    const spyClose = spyOn(dialogRef, 'close');

    const expectValue: PasswordItemInterface = {
      icon: fixture.componentInstance.password.icon,
      title: testModelWorks(fixture, 'input[name="title"]', 'example title'),
      login: testModelWorks(fixture, 'input[name="login"]', 'example login'),
      password: testModelWorks(fixture, 'input[name="password"]', 'example password'),
      url: testModelWorks(fixture, 'input[name="url"]', 'example url')
    };

    const el = fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement;
    el.dispatchEvent(new Event('click', {bubbles: true, cancelable: true}));

    fixture.detectChanges();

    expect(addPasswordSpy).toHaveBeenCalledWith(expectValue);
    expect(spyClose).toHaveBeenCalled();
  }));
});

export function testModelWorks(fixture: ComponentFixture<any>, selector, text): string {
  const el = fixture.debugElement.query(By.css(selector)).nativeElement;

  fixture.detectChanges();

  el.value = text;
  el.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}));
  tick();

  fixture.detectChanges();
  return text;
}
