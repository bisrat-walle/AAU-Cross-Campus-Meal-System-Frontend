import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
  static student: any;

  constructor(private service:SharedService, private modalService: NgbModal) { }

  studentList:any=[];
  
  modalTitle: string="";
  btnText:string="";
  closeResult:any;
  studentIdFilter:string="";
  studentNameFilter:string="";
  studentListWithoutFilter:any=[];
  
  ngOnInit(): void {
    this.refreshStudentList();
  }

  refreshStudentList(){
    this.service.getStudentList().subscribe(data =>{
      this.studentList = data;
      this.studentListWithoutFilter = data;
    })
  }

  filterStudent(){
    var studentNameFilter = this.studentNameFilter
    this.studentList = this.studentListWithoutFilter.filter( (e:any) => {
      return e.student_id.toString().trim().toLowerCase().includes(this.studentIdFilter);
    })
  }



  
  open(content:any, modalTitle:string, btnText:string, student1:any=null) {
    if (student1 != null){
      ShowStudentsComponent.student = student1;
    }
    this.modalTitle = modalTitle;
    this.btnText = btnText;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.refreshStudentList();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.refreshStudentList()
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
	
  deleteStudent(student:any){
	if (confirm("Are you sure you want to delete?")){
	  this.service.deleteStudent(student.student_id).subscribe(res => {
      alert(res.toString());
	  this.refreshStudentList();
    });
	}

  }

}
