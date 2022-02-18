import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-verify-sucess',
  templateUrl: './verify-sucess.component.html',
  styleUrls: ['./verify-sucess.component.css']
})
export class VerifySucessComponent implements OnInit {

  constructor(private title:Title) { }
  
  @Input() reason:any;

  ngOnInit(): void {
	this.title.setTitle("Verify Success");
  }

}
