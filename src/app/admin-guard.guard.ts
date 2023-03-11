import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(private service: SharedService, private router: Router) {}

  canActivate(): boolean {
    let role = localStorage.getItem('role');
    if (role == 'admin') {
      return true;
    }
    this.router.navigate(['/scanner']);
    return false;
  }
}
