import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { ShowStudentsComponent } from '../show-students/show-students.component';


@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.css']
})
export class AddEditStudentsComponent implements OnInit {

  constructor(private service: SharedService) { }

  student:any;
  name: any;
  id: any;
  username: any;
  isUpdateStudentForm: boolean = false;
  month = null;
  addStudentReactiveForm:any;
  updateStudentReactiveForm:any;

  ngOnInit(): void {
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update Student"){
      this.isUpdateStudentForm = true;
      this.student = ShowStudentsComponent.student;
    } else {
      this.student = ShowStudentsComponent.student;
    }
	
	this.addStudentReactiveForm = new FormGroup({
		"student_id": new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-z]{3}\/[0-9]{4}\/[1-9]{2}$")]),
		"name": new FormControl(null, [Validators.required, Validators.minLength(6)]),
		"campus": new FormControl(null, Validators.required),
		"department": new FormControl(null, Validators.required),
		"bach": new FormControl(null, Validators.required),
		"section": new FormControl(null, Validators.required)
	})
	
	if (this.student !== undefined){
	
		this.updateStudentReactiveForm = new FormGroup({
		"student_id": new FormControl(this.student.student_id, [Validators.required, Validators.minLength(6)]),
		"name": new FormControl(this.student.name, [Validators.required, Validators.minLength(6)]),
		"campus": new FormControl(this.student.campus, Validators.required),
		"department": new FormControl(this.student.department, Validators.required),
		"bach": new FormControl(this.student.bach, Validators.required),
		"section": new FormControl(this.student.section, Validators.required)
	})
	}
	
	
 
    
  }

  closeModal():void{
    document.getElementById("closeModal")?.click();
  }

  addStudent(form: any){
    let di = form.value;
    console.log(di)
    this.service.addStudent(di).subscribe(res => {
      alert(res.toString());
	  console.log(res)
      this.closeModal();
	  form.reset();
    });
  }

  updateStudent(form: any){
    let di = form.value;
    this.service.updateStudent(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
	  form.reset();
    }); 
  }

}
