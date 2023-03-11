import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  constructor(
    private router: Router,
    private service: SharedService,
    private title: Title
  ) {}

  parentReason: any;

  ngOnInit(): void {
    this.title.setTitle('Scan Id');
  }

  isScannerPage(): boolean {
    return this.router.url == '/scanner';
  }

  isScannerFailedPage(): boolean {
    return this.router.url == '/scanner/failed';
  }

  isScannerSuccessPage(): boolean {
    return this.router.url == '/scanner/verified';
  }

  scanId(): void {
    console.log('entered');
    let result;
    this.service.scan().subscribe((data: any) => {
      console.log(data);
      result = data;
      this.parentReason = data.reason;
      if (data.status == false) {
        this.router.navigateByUrl('/scanner/failed');
        return;
      }
      this.router.navigateByUrl('/scanner/verified');
    });
  }

  logout(): void {
    this.service.logout();
    this.router.navigateByUrl('/');
  }
}
