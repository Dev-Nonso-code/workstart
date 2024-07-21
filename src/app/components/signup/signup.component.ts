import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {

  public userInfo: Array<{
    email: string;
    firstname: string;
    lastname: string;
    password: string;
  }> = JSON.parse(localStorage.getItem('userInfo')!) || [];
  public newUser = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  };
  public displayForm: boolean = false; // Make sure to declare displayForm

  constructor(private router: Router) {} // Inject the Router

  addUsers() {
    if (this.newUser.email && this.newUser.firstname && this.newUser.lastname && this.newUser.password) {
      // Check if email already exists in userInfo array
      const emailExists = this.userInfo.some(user => user.email === this.newUser.email);

      if (!emailExists) {
        this.userInfo.push(this.newUser);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        this.newUser = { email: '', firstname: '', lastname: '', password: '' };
        this.displayForm = false;
        this.router.navigate(['login']);
      } else {
        // Handle the case when email already exists
        // For example, show an error message to the user
        alert('Email already exists. Please use a different email.');
      }
    }
  }

}
