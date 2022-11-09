import { AuthGuardService } from './shared/services/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './modules/common/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './modules/common/reset-password/reset-password.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/common/authentication/authentication.module').then( authModule => authModule.AuthenticationModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then (home => home.HomeModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: '**', redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
