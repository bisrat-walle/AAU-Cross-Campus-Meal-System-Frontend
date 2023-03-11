import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { ShowScheduleComponent } from '../show-schedule/show-schedule.component';

@Component({
  selector: 'app-add-edit-schedule',
  templateUrl: './add-edit-schedule.component.html',
  styleUrls: ['./add-edit-schedule.component.css'],
})
export class AddEditScheduleComponent implements OnInit {
  constructor(private service: SharedService) {}

  schedule: any;
  name: any;
  id: any;
  campus: any;
  isUpdateScheduleForm: boolean = false;

  addScheduleReactiveForm: any;
  updateScheduleReactiveForm: any;

  ngOnInit(): void {
    let el = document.getElementsByClassName('modal-basic-title');
    console.log(el[0].innerHTML);
    if (el[0].innerHTML == 'Update Schedule') {
      this.isUpdateScheduleForm = true;
      this.schedule = ShowScheduleComponent.schedule;
    } else {
      this.schedule = ShowScheduleComponent.schedule;
    }

    this.addScheduleReactiveForm = new FormGroup({
      campus: new FormControl({ value: '5killo', disabled: true }),
      department: new FormControl(null, Validators.required),
      bach: new FormControl(null, Validators.required),
      section: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required),
      day: new FormControl(null, Validators.required),
    });

    if (this.schedule !== undefined) {
      this.updateScheduleReactiveForm = new FormGroup({
        campus: new FormControl({ value: '5killo', disabled: true }),
        department: new FormControl(
          this.schedule.department,
          Validators.required
        ),
        bach: new FormControl(this.schedule.bach, Validators.required),
        section: new FormControl(this.schedule.section, Validators.required),
        startTime: new FormControl(
          this.schedule.startTime,
          Validators.required
        ),
        endTime: new FormControl(this.schedule.endTime, Validators.required),
        day: new FormControl(this.schedule.day, Validators.required),
        id: new FormControl(this.schedule.id, Validators.required),
      });
    }

    console.log(this.updateScheduleReactiveForm);
  }

  getClass(form: any, fieldname: any): string {
    let classList = 'form-control ';

    if (form.get(fieldname).invalid && form.get(fieldname).touched) {
      classList += 'is-invalid';
    } else if (form.get(fieldname).touched) {
      classList += 'is-valid';
    }

    return classList;
  }

  closeModal(): void {
    document.getElementById('closeModal')?.click();
  }

  addSchedule(form: any) {
    form.get('campus').enable();
    let di = form.value;
    console.log(di);
    this.service.addSchedule(di).subscribe((res) => {
      alert(res.toString());
      this.closeModal();
    });
  }

  updateSchedule(form: any) {
    form.get('campus').enable();
    let di = form.value;
    this.service.updateSchedule(di).subscribe((res) => {
      alert(res.toString());
      this.closeModal();
    });
  }
}
