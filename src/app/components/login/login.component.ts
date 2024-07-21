import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
// login: any;
userEmail = '';
userPassword = '';
userInfo = JSON.parse(localStorage.getItem('userInfo') || '[]');
constructor(private router: Router) {} 

login() {
  const user = this.userInfo.find(
    (u: any) => u.email === this.userEmail && u.password === this.userPassword
  );

  if (user) {
    // Assuming you have some sort of service to keep track of the user's state
    // loggedInService.logIn(user);
    console.log('Successfully logged in!');
    this.router.navigate(['dashboard']); // Navigate to the home route or dashboard route
  } else {
    console.error('Invalid credentials!');
    // Show an error to the user (e.g., via alert or a message on the page)
    alert('Invalid email or password.');
  }
}
}
