import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

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
  
  login(form: NgForm, loginAs:string){
    let di = form.value;
    this.service.login(di).subscribe(
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
                return
              }
              this.router.navigateByUrl("/scanner")
            }
          )
		},
    
    (err:any) => {
      this.router.navigateByUrl("/login?error=error")
    }
	);
  }

}
