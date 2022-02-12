import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.service.logout();
    this.router.navigateByUrl("/");
  }

}
