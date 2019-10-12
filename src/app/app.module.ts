import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PasswordsManagerComponent} from './components/passwords-manager/passwords-manager.component';
import {BackgroundComponent} from './components/background/background.component';
import {HttpClientModule} from '@angular/common/http';
import {CreatePasswordComponent} from './components/create-password/create-password.component';
import {TransformerOperatorModule} from './modules/transformer-operator/transformer-operator.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    PasswordsManagerComponent,
    BackgroundComponent,
    CreatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    TransformerOperatorModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [CreatePasswordComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
