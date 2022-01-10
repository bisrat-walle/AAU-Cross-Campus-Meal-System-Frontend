import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let userBtn = document.getElementById("pills-login-as-user-button");
    let adminBtn = document.getElementById("pills-login-as-admin-button");
    let userLoginContent = document.getElementById("pills-login-as-user");
    let adminLoginContent = document.getElementById("pills-login-as-admin");
    userBtn?.addEventListener("click", () => {
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

}
