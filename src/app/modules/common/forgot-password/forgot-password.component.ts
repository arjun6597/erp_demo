import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegexEnum } from 'src/app/global/regex-enum';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  emailForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.initializeEmailForm();
  }

  initializeEmailForm() {
    this.emailForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(RegexEnum.email)])],
    });
  }

  submitEmail() {

  }

  backToLogin() {
    this.route.navigate(['/']);
  }

}
