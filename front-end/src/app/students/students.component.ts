import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.service.logout();
    this.router.navigateByUrl("/");
  }

}
