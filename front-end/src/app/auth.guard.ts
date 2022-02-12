import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:SharedService, private router:Router){}
  canActivate():boolean{
	if (this.service.loggedIn()){
		return true;
	}
	this.router.navigateByUrl("/login");
	return false;
  }
  
}
