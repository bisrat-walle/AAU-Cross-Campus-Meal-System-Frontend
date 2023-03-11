import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css'],
})
export class ShowScheduleComponent implements OnInit {
  static schedule: any;

  constructor(private service: SharedService, private modalService: NgbModal) {}

  scheduleList: any = [];

  modalTitle: string = '';
  btnText: string = '';
  closeResult: any;
  scheduleIdFilter: string = '';
  scheduleNameFilter: string = '';
  scheduleListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshScheduleList();
  }

  refreshScheduleList() {
    this.service.getScheduleList().subscribe((data) => {
      this.scheduleList = data;
      this.scheduleListWithoutFilter = data;
    });
  }

  filterSchedule() {
    this.scheduleList = this.scheduleListWithoutFilter.filter((e: any) => {
      return (
        e.day.toString
          .toString()
          .trim()
          .toLowerCase()
          .includes(this.scheduleIdFilter) ||
        e.campus
          .toString()
          .trim()
          .toLowerCase()
          .includes(this.scheduleIdFilter) ||
        e.department
          .toString()
          .trim()
          .toLowerCase()
          .includes(this.scheduleIdFilter) ||
        e.bach.toString
          .toString()
          .trim()
          .toLowerCase()
          .includes(this.scheduleIdFilter) ||
        e.section.toString
          .toString()
          .trim()
          .toLowerCase()
          .includes(this.scheduleIdFilter)
      );
    });
  }

  open(
    content: any,
    modalTitle: string,
    btnText: string,
    schedule1: any = null
  ) {
    if (schedule1 != null) {
      ShowScheduleComponent.schedule = schedule1;
      console.log('schedule1' + schedule1.schedule_id);
    }
    this.modalTitle = modalTitle;
    this.btnText = btnText;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.refreshScheduleList();
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.refreshScheduleList();
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteSchedule(schedule: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.service.deleteSchedule(schedule.id).subscribe((res) => {
        alert(res.toString());
        this.refreshScheduleList();
      });
    }
  }
}
