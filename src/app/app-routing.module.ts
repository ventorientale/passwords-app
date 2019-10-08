import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PasswordsManagerComponent} from './components/passwords-manager/passwords-manager.component';


const routes: Routes = [
  {

    path: 'logine',
    component: AuthenticationComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PasswordsManagerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
