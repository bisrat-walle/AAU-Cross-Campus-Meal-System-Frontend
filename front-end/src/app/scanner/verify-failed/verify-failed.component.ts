import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-verify-failed',
  templateUrl: './verify-failed.component.html',
  styleUrls: ['./verify-failed.component.css']
})
export class VerifyFailedComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
	this.title.setTitle("Verify Failed");
  }

}
