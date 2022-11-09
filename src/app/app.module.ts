import { AppheaderComponent } from './modules/common/appheader/appheader.component';
import { AppfooterComponent } from './modules/common/appfooter/appfooter.component';
import { AppsidebarComponent } from './modules/common/appsidebar/appsidebar.component';
import { InterceptorModule } from './shared/services/interceptor.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpRequestService } from './shared/services/http-request.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './modules/home/home.component';
import { ForgotPasswordComponent } from './modules/common/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './modules/common/reset-password/reset-password.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppsidebarComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule,
    BsDropdownModule.forRoot(),
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
     }),
    NgxLoadingModule.forRoot({}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    })
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
