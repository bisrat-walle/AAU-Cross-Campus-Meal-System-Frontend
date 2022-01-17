import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
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
  
  login(form: NgForm){
    let di = form.value;
    let val = {"username":di.username, "password":di.password};
    this.service.addUser(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
