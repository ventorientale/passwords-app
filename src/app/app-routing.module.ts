import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PasswordsManagerComponent} from './components/passwords-manager/passwords-manager.component';
import {AuthenticationGuard} from './guards/authentication.guard';


const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: PasswordsManagerComponent,
      }
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
