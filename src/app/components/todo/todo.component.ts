
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  // [x: string]: any;
  public todo: string = 'sleep now now';
  public newTodo: string = '';
  public displayForm: boolean = false;
  public ind: number = 0;
  // public randomValue: number = Math.random();
  public min: number = 1;
  public max: number = 99;
  public randomValue: number = 0;
  public randomInt: number = 0;
  public numb: any = 0;

  public loverInfo: Array<{
// randomInt: any;
    yourname: string;
    hername: string;
    randomInt: any;
  }> = JSON.parse(localStorage.getItem('loverInfo')!) || [];
  // public grade: math.random((***)) ;
  public newUser = {
    yourname: '',
    hername: '',
    randomInt:this.numb,
  };
  public newUserEdit = {
    yourname: '',
    hername: '',
    randomInt: '',
  };
  writeTodo() {
    console.log(this.loverInfo);
  }
  addusers() {
   this.randomValue = Math.floor(Math.random()* 39) * (this.max - this.min) + this.min;
   this.randomInt = Math.floor(this.randomValue);
   this.numb = JSON.stringify(this.randomInt)

    if (this.newUser.yourname && this.newUser.hername && this.numb != 0) {
      this.loverInfo.push(this.newUser);
      localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
      this.newUser = {
        yourname: '',
        hername: '',
        randomInt: this.numb,
      };
    }
    this.displayForm = false;
    console.log(this.newUser);

    this.router.navigate(['/todo']);
  }

  editUser(i: number) {
    console.log(i);
    this.ind = 1;
    console.log(i);

    this.displayForm = true;
    console.log(this.loverInfo[i]);
    this.newUserEdit = this.loverInfo[i];
  }
  editUserInfo() {
    this.randomValue = Math.floor(Math.random()* 6) * (this.max - this.min) +this.min;
   this.randomInt = Math.floor(this.randomValue);
   this.numb = JSON.stringify(this.randomInt)
    this.loverInfo[this.ind] = this.newUserEdit;
    console.log(this.loverInfo);
    this.displayForm = true;
    localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
    this.newUserEdit = {
      yourname: '',
      hername: '',
      randomInt: '',
    };
  }
  delUser(i: number) {
    this.loverInfo.splice(i, 1);
    localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
  }

  constructor(public router: Router) {
    // public randomValue = Math.random((**));
  }
}
