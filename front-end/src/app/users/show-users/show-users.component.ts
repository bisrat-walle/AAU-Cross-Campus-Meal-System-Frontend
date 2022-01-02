import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private service:SharedService) { }

  userList:any=[];

  ngOnInit(): void {
    this.refreshUserList()
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data =>{
      this.userList = data;
    })
  }

}
