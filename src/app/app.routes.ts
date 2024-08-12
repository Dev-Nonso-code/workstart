import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo:"app"},
    {path: "form", component:SignupComponent },
    {path: "login", component:LoginComponent },
    {path: "dashboard", component:DashboardComponent },
    {path: "nav", component:NavComponent },
    {path: "todo", component:TodoComponent },
];
