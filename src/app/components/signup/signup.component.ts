import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  [x: string]: any;
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
}

adduser=()=> {
  if (this.newUser.email && this.newUser.firstname && this.newUser.lastname && this.newUser.password
  ) {
    this.userInfo.push(this.newUser);
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    this.newUser = {
      username: '',
      email: '',
      course: '',
      location: '',
    };
  }
  this.displayForm = false;
  console.log(this.userInfo);

    this.router.navigate(['nav'])
}
