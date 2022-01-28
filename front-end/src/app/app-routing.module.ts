import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { VerifyFailedComponent } from './scanner/verify-failed/verify-failed.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'student', component: StudentsComponent, canActivate:[AuthGuard, AdminGuardGuard]},
  {path:'user', component: UsersComponent, canActivate:[AuthGuard, AdminGuardGuard]},
  {path:'scanner', component: ScannerComponent, 
   children: [
    {path:'', redirectTo:"login", pathMatch:"full", canActivate:[AuthGuard]},
    {path:'failed',component:ScannerComponent, canActivate:[AuthGuard]},
	{path:'verified',component:ScannerComponent, canActivate:[AuthGuard]}
   ]
  },

  {path:'schedule', component: ScheduleComponent, canActivate:[AuthGuard, AdminGuardGuard]},
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
