import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
  }


  logout():void{
    this.service.logout();
    this.router.navigateByUrl("/");
  }




}
