import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  static user: any;

  constructor(private service:SharedService, private modalService: NgbModal) { }

  userList:any=[];
  
  modalTitle: string="";
  btnText:string="";
  activateAddEditUserComp:boolean=false;
  closeResult:any;
  userIdFilter:string="";
  userNameFilter:string="";
  userListWithoutFilter:any=[];
  
  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data =>{
      this.userList = data;
      this.userListWithoutFilter = data;
    })
  }

  filterUser(){
    var userNameFilter = this.userNameFilter
    this.userList = this.userListWithoutFilter.filter( (e:any) => {
      return e.username.toString().trim().toLowerCase().includes(this.userNameFilter);
    })
  }



  
  open(content:any, modalTitle:string, btnText:string, user1:any=null) {
    if (user1 != null){
      ShowUsersComponent.user = user1;
    }
    this.modalTitle = modalTitle;
    this.btnText = btnText;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.refreshUserList();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.refreshUserList()
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
	
  deleteUser(user:any){
    let val =     {
        "id": user.id,
        "name": user.name,
        "username": user.username
    }
    if (confirm("Are you sure you want to delete this user?")){
      console.log("Trying to delete the user");
      this.service.deleteUser(val).subscribe(data => {
        alert(data.toString());
        this.refreshUserList();
      });     
    }
  }
	
}
