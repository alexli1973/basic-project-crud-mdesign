import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../shared/services/login.service';
import {UserModel} from '../../shared/model/user.model';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'email': '',
      'password': '',
    });
  }

  login() {
   // console.log('login', this.form.value);
    const formData = this.form.value;
    this.loginService.getUserByEmail(formData.email).subscribe((user: UserModel) => {
      console.log(user.password);
      if (user) {
        if (user.password === formData.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.router.navigate(['system/items']);
          alert('Success!');
        } else {
          alert('Error pass!');
        }
      } else {
        alert('Error login!');
      }
    });
  }

}
