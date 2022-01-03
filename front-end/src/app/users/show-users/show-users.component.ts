import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  constructor(private service:SharedService, private modalService: NgbModal) { }

  userList:any=[];
  
  modalTitle: string="";
  activateAddEditUserComp:boolean=false;
  user:any;
  closeResult:any;
  
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
  
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

}
