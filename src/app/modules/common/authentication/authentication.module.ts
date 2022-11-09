import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication.routing';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({}),
    AuthenticationRoutingModule
   ],
  declarations: [
    LoginComponent
  ],
  providers: [ ]
})
export class AuthenticationModule { }
