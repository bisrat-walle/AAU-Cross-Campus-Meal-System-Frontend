import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Manage Students")
  }

  logout():void{
    this.service.logout();
    this.router.navigateByUrl("/");
  }

}
