import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { ShowScheduleComponent } from '../show-schedule/show-schedule.component';

@Component({
  selector: 'app-add-edit-schedule',
  templateUrl: './add-edit-schedule.component.html',
  styleUrls: ['./add-edit-schedule.component.css']
})
export class AddEditScheduleComponent implements OnInit {

  constructor(private service: SharedService) { }

  schedule:any;
  name: any;
  id: any;
  campus: any;
  isUpdateScheduleForm: boolean = false;

  ngOnInit(): void {
    console.log("Hello World")
    let el = document.getElementsByClassName("modal-basic-title");
	console.log(el[0].innerHTML)
  console.log("Hello World")
    if (el[0].innerHTML == "Update Schedule"){
      this.isUpdateScheduleForm = true;
      this.schedule = ShowScheduleComponent.schedule;
    } else {
      this.schedule = ShowScheduleComponent.schedule;
    }
 
    
  }

  closeModal():void{
    document.getElementById("closeModal")?.click();
  }

  addSchedule(form: NgForm){
    let di = form.value;
    this.service.addSchedule(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    });
  }

  updateSchedule(form: NgForm){
    let di = form.value;
    this.service.updateSchedule(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    }); 
  }

}
