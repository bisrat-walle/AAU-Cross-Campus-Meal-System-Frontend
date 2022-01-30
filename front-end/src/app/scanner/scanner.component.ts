import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

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
  
  scanId():any{
	let result = this.service.scan()
	if (result.status == true){
		this.router.navigateByUrl("/scanner/verified");
		return;
	}
	this.router.navigateByUrl("/scanner/failed");
  }

}
