import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isRegister: boolean = true;
  router = inject(Router);
  userData: any = {
    email: '',
    username: '',
    password: '',
    Mnumber: '',
  };
  loginUser: any = {
    email: '',
    password: '',
  };
  formsValue: any;
  verify: any;
  Submit() {
    // this.formsValue = this.userData;
    // console.log(this.formsValue);
    // debugger;
    localStorage.setItem('formsValue', JSON.stringify(this.userData));
    // debugger;

    this.userData = '';
  }
  Login() {
    this.verify = localStorage.getItem('formsValue');
    this.verify = JSON.parse(this.verify);
    console.log(this.verify);
    console.log('userData => ', this.loginUser);
    if (
      this.verify.email == this.loginUser.email &&
      this.verify.password == this.loginUser.password
    ) {
      this.router.navigateByUrl('auth-user');
      console.log('From if');
    } else {
      alert('Not matched');
    }
  }
}
