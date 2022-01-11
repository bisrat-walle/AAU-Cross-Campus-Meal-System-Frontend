import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  ngOnInit(): void {
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update Student"){
      this.isUpdateStudentForm = true;
      this.student = ShowStudentsComponent.student;
    } else {
      this.student = ShowStudentsComponent.student;
    }
 
    
  }

  addStudent(form: NgForm){
    let di = form.value;
    let val = {"student_id":di.student_id, "name":di.name, "department":di.department, "year_of_study":di.year_of_study, "campus":di.campus, "section":di.section};
    this.service.addStudent(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateStudent(form: NgForm){
    let di = form.value;
    let val = {
                "student_id":di.student_id, 
                "name":di.name,
                "department":di.department, 
				"year_of_study":parseInt(di.year_of_study),
				"campus":di.campus, 
				"section":parseInt(di.section)
              };
    this.service.updateStudent(val).subscribe(res => {
      alert(res.toString());
    }); 
  }

}
