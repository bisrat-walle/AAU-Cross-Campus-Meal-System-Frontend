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
    let el = document.getElementsByClassName("modal-basic-title");
	console.log(el[0].innerHTML)
    if (el[0].innerHTML == "Update Schedule"){
      this.isUpdateScheduleForm = true;
      this.schedule = ShowScheduleComponent.schedule;
    } else {
      this.schedule = ShowScheduleComponent.schedule;
    }
 
    
  }

  addSchedule(form: NgForm){
    let di = form.value;
    let val = {"schedule_id":di.schedule_id, "department":di.department, "batch":di.batch, 
				"campus":di.campus,
				"section":di.section, "time":di.time, "DAY":di.DAY};
    this.service.addSchedule(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSchedule(form: NgForm){
    let di = form.value;
    let val = {
                "schedule_id":di.schedule_id, 
                "department":di.department, 
				"batch":parseInt(di.batch), 
				"campus":di.campus, 
				"section":parseInt(di.section), 
				"time":di.time, 
				"DAY":di.DAY
              };
    this.service.updateSchedule(val).subscribe(res => {
      alert(res.toString());
    }); 
  }

}
