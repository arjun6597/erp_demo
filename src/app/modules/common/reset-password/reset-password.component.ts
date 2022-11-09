import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { constants } from 'src/app/global/constants';
import { NotificationAlertService } from 'src/app/shared/services/notification-alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor( private fb: FormBuilder,
               private notificationService: NotificationAlertService,
               private route: Router ) { }

  ngOnInit(): void {
    this.initializeForgotPswForm();
  }

  initializeForgotPswForm() {
    this.forgotPasswordForm = this.fb.group({
      password: ['', Validators.compose([Validators.required])],
      resetPassword: ['', [Validators.required]],
    });
  }

  backToLogin() {
    this.route.navigate(['/']);
  }

  showPassword(passwordElement) {
    if (passwordElement.type === constants.PASSWORD_TYPE_SHOW) {
      passwordElement.type = constants.PASSWORD_TYPE_HIDE;
    } else {
      passwordElement.type = constants.PASSWORD_TYPE_SHOW;
    }
  }

  forgotPassword() {
    if (this.forgotPasswordForm.value.password.trim() === this.forgotPasswordForm.value.resetPassword.trim() ) {
      console.log(this.forgotPasswordForm.value);
      this.notificationService.showSuccess('Password changed succesfully.');
    } else {
      this.notificationService.showError('Password does not match.');
    }
  }
}
