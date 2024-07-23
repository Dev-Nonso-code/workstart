import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  [x: string]: any;
  public todo: string = 'sleep now now';
  public newTodo: string = '';
  public displayForm: boolean = false;
  public ind: number = 0;
  public loverInfo: Array<{
    yourname: string;
    hername: string;
    
  }> = JSON.parse(localStorage.getItem('loverInfo')!) || [];
  // public grade: math.random((***)) ;
  public newUser = {
    yourname: '',
    hername: '',
    
  };
  public newUserEdit = {
    yourname: '',
    hername: '',
  };
  writeTodo() {
    console.log(this.loverInfo);
  }
  addusers() {
    if (
      this.newUser.yourname &&
      this.newUser.hername
    ) {
      this.loverInfo.push(this.newUser);
      localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
      this.newUser = {
        yourname: '',
        hername: '',
        
      };
    }
    this.displayForm = false;
    console.log(this.loverInfo);
  
      this.router.navigate(['/todo'])
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
    this.loverInfo[this.ind] = this.newUserEdit;
    console.log(this.loverInfo);
    this.displayForm = true;
    localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
    this.newUserEdit = {
      yourname: '',
      hername: '',
    };
  }
  delUser(i: number) {
    this.loverInfo.splice(i, 1);
    localStorage.setItem('loverInfo', JSON.stringify(this.loverInfo));
  }

  constructor(public router: Router){}
  
}