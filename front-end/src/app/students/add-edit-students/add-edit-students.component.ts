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
  month = null;

  ngOnInit(): void {
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update Student"){
      this.isUpdateStudentForm = true;
      this.student = ShowStudentsComponent.student;
    } else {
      this.student = ShowStudentsComponent.student;
    }
 
    
  }

  closeModal():void{
    document.getElementById("closeModal")?.click();
  }

  addStudent(form: NgForm){
    let di = form.value;
    console.log(di)
    this.service.addStudent(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    });
  }

  updateStudent(form: NgForm){
    let di = form.value;
    this.service.updateStudent(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    }); 
  }

}
