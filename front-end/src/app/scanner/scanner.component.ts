import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  isScannerPage():boolean{
	return this.router.url == "/scanner";
  }
  
  isScannerFailedPage():boolean{
	return this.router.url == "/scanner/failed";
  }
  
  isScannerSuccessPage():boolean{
	return this.router.url == "/scanner/verified";
  }

}
