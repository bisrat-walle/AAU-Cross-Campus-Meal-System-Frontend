import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  ngOnInit(): void {
    let el = document.getElementsByClassName("modal-basic-title");
    if (el[0].innerHTML == "Update User"){
      this.isUpdateUserForm = true;
      this.user = ShowUsersComponent.user;
    } else {
      this.user = ShowUsersComponent.user;
    }
 
    
  }

  addUser(form: NgForm){
    let di = form.value;
    let val = {"id":di.id, "name":di.name, "username":di.username};
    this.service.addUser(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateUser(form: NgForm){
    let di = form.value;
    let val = {
                "id":parseInt((di.id=='')?ShowUsersComponent.user.id:di.id), 
                "name":(di.name=='')?ShowUsersComponent.user.name:di.name, 
                "username":(di.username=='')?ShowUsersComponent.user.username:di.username
              };
    this.service.updateUser(val).subscribe(res => {
      alert(res.toString());
    }); 
  }

}
