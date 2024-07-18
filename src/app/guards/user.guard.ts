import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../app.routes';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem("userInfo")
  const routes = inject(Router)
  if(user){
    return true;
  }else{
    alert("please login")
    routes.navigate(["login"])
    return false;
  }
  return true;
};
