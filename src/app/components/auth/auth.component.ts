import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoading = false;
  isLoginMode = true;
  isSignupSuccess = false;
  error!: string | null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { isLoginMode: boolean };
    this.isLoginMode = state?.isLoginMode || false;
  }

  onHandleError() {
    this.error = null;
  }

  onSwitchMode(form: NgForm) {
    form.reset();
    this.isLoginMode = !this.isLoginMode;
  }

  onSignupSuccess() {
    this.isLoginMode = true;
  }

  onSubmit(form: NgForm) {
    const { username, email, password } = form.value;
    if (this.isLoginMode) {
      this.isLoading = true;

      localStorage.setItem('userDetails', username);
      this.router.navigate(['/']);
      this.isLoading = false;
    }
  }
}
