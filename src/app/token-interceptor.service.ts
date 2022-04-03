import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  
  intercept(req:any, next:any){
	let authServie = this.injector.get(SharedService);
	
	let tokenizedReq = req.clone({
		setHeaders:{
			Authorization: `Bearer ${authServie.getToken()}`
		}
	})
	return next.handle(tokenizedReq)
  }
}
