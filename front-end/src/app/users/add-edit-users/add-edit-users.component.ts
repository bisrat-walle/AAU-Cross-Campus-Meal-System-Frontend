import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { ShowUsersComponent } from '../show-users/show-users.component';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUsersComponent implements OnInit {

  constructor(private service: SharedService) { }

  user:any;
  name: any;
  id: any;
  username: any;
  isUpdateUserForm: boolean = false;
  userReactiveForm:any;

  ngOnInit(): void {
  
	this.userReactiveForm = new FormGroup({
		"username": new FormControl(null, [Validators.required, Validators.minLength(5)]),
		"password": new FormControl(null, [Validators.required, Validators.minLength(4)])
	})
  
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update User"){
      this.isUpdateUserForm = true;
      this.user = ShowUsersComponent.user;
    } else {
      this.user = ShowUsersComponent.user;
    }
 
    
  }

  closeModal():void{
    document.getElementById("closeModal")?.click();
  }

  addUser(form: NgForm){
    
    let di = form.value;
    this.service.addUser(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    });
  }

  updateUser(form: NgForm){
    let di = form.value;
    console.log(di);
    this.service.updateUser(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
    }); 
  }

}
