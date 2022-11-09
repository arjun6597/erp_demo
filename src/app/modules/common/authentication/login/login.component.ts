import { RegexEnum } from './../../../../global/regex-enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { constants } from 'src/app/global/constants';
import { Router } from '@angular/router';
import { NotificationAlertService } from 'src/app/shared/services/notification-alert.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public messageList: any = {
    email: '',
    password: '',
  };
  public logoPath = constants.DASHBOARD_LOGO;

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private route: Router,
    public notificationAlertService: NotificationAlertService,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.authService.enableAllTheme.next(false);
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(RegexEnum.email)])],
      password: ['', [Validators.required]],
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.localStorageService.setDataInStorage('x-auth-token', '123');
    this.authService.accessGivenToApp(true);
    this.notificationAlertService.showSuccess('User logged in successfully');
    this.route.navigate(['home']);
  }

}
