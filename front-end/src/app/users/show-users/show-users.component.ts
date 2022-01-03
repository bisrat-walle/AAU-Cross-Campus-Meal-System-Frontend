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
  
  modalTitle: string="";
  activateAddEditUserComp:boolean=false;
  user:any;
  
  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data =>{
      this.userList = data;
    })
  }

  addClick(){
    this.user={
      userId:0,
      userName:""
    }
    this.modalTitle = "Add User";
    this.activateAddEditUserComp = true;
  }

  closeClick(){
    this.activateAddEditUserComp=false;
    this.refreshUserList();
  }

}
