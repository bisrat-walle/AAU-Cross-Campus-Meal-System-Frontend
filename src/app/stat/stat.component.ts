import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private service:SharedService, private title:Title, private router:Router) { }
	
  allStudents:any;
  breakfast:any;
  lunch:any;
  dinner:any;
  day:any;
	
  ngOnInit(): void {
	this.title.setTitle("Statistics");
	this.service.getStat().subscribe(
    
		(data:any) => {
      console.log(data)
			this.breakfast = data.breakfast;
			this.lunch = data.lunch;
			this.dinner = data.dinner;
			this.allStudents = data.allStudents;
      this.day = data.day;
		},
    (err) => {

      console.log(err);
    }
	)
  }
  logout():void{
    this.service.logout();
    this.router.navigateByUrl("/");
  }

}
