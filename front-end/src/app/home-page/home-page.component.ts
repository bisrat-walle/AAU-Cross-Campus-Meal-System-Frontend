import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    document.querySelector('.title__main')?.classList.add('getStarted');
  }
	
  ngOnDestroy(): void {
    document.querySelector('.title__main')?.classList.remove('getStarted');
  }
  
}
