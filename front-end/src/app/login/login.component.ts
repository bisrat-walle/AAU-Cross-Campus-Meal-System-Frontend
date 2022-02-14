import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, 
				private activatedRoute:ActivatedRoute,
				private title:Title) { }
				
  userLoginReactiveForm: any;
  adminLoginReactiveForm: any;

  ngOnInit(): void {
  
	this.userLoginReactiveForm = new FormGroup({
		"username": new FormControl(null, [Validators.required, Validators.minLength(5)]),
		"password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
	});
	
	this.adminLoginReactiveForm = new FormGroup({
		"username": new FormControl(null, [Validators.required, Validators.minLength(5)]),
		"password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
	});
	
	this.title.setTitle("Login")

    this.error();

    let userBtn = document.getElementById("pills-login-as-user-button");
    let adminBtn = document.getElementById("pills-login-as-admin-button");
    let userLoginContent = document.getElementById("pills-login-as-user");
    let adminLoginContent = document.getElementById("pills-login-as-admin");
	let userUserName = document.getElementById("user_username");
	let adminUserName = document.getElementById("user_admin");
    userBtn?.addEventListener("click", () => {
	  userUserName?.focus();
      if (!userLoginContent?.classList.contains("show")){
        userLoginContent?.classList.toggle("show");
        userLoginContent?.classList.toggle("active");
        adminLoginContent?.classList.toggle("show");
        adminLoginContent?.classList.toggle("active");
        userBtn?.classList.toggle("active");
        adminBtn?.classList.toggle("active");
      }

    });

    adminBtn?.addEventListener("click", () => {
	  adminUserName?.focus();
      if (!adminLoginContent?.classList.contains("show")){
      userLoginContent?.classList.toggle("show");
      userLoginContent?.classList.toggle("active");
      adminLoginContent?.classList.toggle("show");
      adminLoginContent?.classList.toggle("active");
      userBtn?.classList.toggle("active");
      adminBtn?.classList.toggle("active");
      }
    });
  }

  error():boolean{
    return this.activatedRoute.snapshot.queryParams["error"] !== undefined;
  }
  
  
  getClass(form:any, fieldname:any):string{
	let classList="form-control ";
	
	if (form.get(fieldname).invalid && form.get(fieldname).touched){
	 classList += "is-invalid"
	} else{
	 classList += "is-valid"
	}
	
	return classList;
  }
  
  login(form:FormGroup, loginAs:string){
	
    this.service.login(form.value).subscribe(
		(res:any) => {
		  if (res['access']) {
            localStorage.setItem('token', res['access']); //token here is stored in a local storage
          }

          this.service.getUserProfile().subscribe(
            (data:any) => {
              let role=data["role"];
              if (role != loginAs){
                this.service.logout();
                this.router.navigateByUrl("/login?error=error")
                return
              }
              localStorage.setItem("role", role)
              if (data["role"] == "admin"){
                this.router.navigateByUrl("/user")
				form.reset();
                return
				
              }
              this.router.navigateByUrl("/scanner")
			  form.reset();
            }
          )
		},
    
    (err:any) => {
      this.router.navigateByUrl("/login?error=error")
    }
	);
  }

}
