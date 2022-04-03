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
  userAddReactiveForm:any;
  userUpdateReactiveForm:any;

  ngOnInit(): void {
  
	this.userAddReactiveForm = new FormGroup({
		"username": new FormControl(null, [Validators.required, Validators.minLength(5)]),
		"password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
		"last_name": new FormControl(null, [Validators.required, Validators.minLength(5)]),
		"first_name": new FormControl(null, [Validators.required, Validators.minLength(4)])
	})
	
	
  
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update User"){
      this.isUpdateUserForm = true;
      this.user = ShowUsersComponent.user;
    } else {
      this.user = ShowUsersComponent.user;
    }
	
	if (this.user !== undefined){
		this.userUpdateReactiveForm = new FormGroup({
			"id": new FormControl(this.user.id, [Validators.required]),
			"username": new FormControl(this.user.username, [Validators.required, Validators.minLength(5)]),
			"password": new FormControl(null, [Validators.required, Validators.minLength(4)]),
			"last_name": new FormControl(this.user.last_name, [Validators.required]),
			"first_name": new FormControl(this.user.first_name, [Validators.required, Validators.minLength(4)])
		})
	}
	
	
 
    
  }
  
  getClass(form:any, fieldname:any):string{
	let classList="form-control ";
	
	if (form.get(fieldname).invalid && form.get(fieldname).touched){
	 classList += "is-invalid"
	} 
	
	else if (form.get(fieldname).touched){
	 classList += "is-valid"
	}
	
	return classList;
  }

  closeModal():void{
    document.getElementById("closeModal")?.click();
  }

  addUser(form: FormGroup){
    
    let di = form.value;
    this.service.addUser(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
	  form.reset()
    });
  }

  updateUser(form: any){
    let di = form.value;
    console.log(di);
    this.service.updateUser(di).subscribe(res => {
      alert(res.toString());
      this.closeModal();
	  form.reset()
    }); 
  }

}
