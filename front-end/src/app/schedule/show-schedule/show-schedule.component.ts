import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {

  scheduleList:any=[];
  modalTitle: string="";
  activateAddEditUserComp:boolean=false;
  user:any;
  closeResult:any;

  constructor(private service: SharedService, private modalService:NgbModal) { }

  ngOnInit(): void {
	this.refreshScheduleList()
  }
  
  refreshScheduleList(){
    this.service.getScheduleList().subscribe(data =>{
      this.scheduleList = data;
    })
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
