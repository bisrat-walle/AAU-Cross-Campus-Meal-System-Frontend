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

const routes: Routes = [
  {path:'student', component: StudentsComponent, canActivate:[AdminGuardGuard]},
  {path:'user', component: UsersComponent, canActivate:[AdminGuardGuard]},
  {path:'scanner', component: ScannerComponent, 
   children: [
    {path:'', redirectTo:"login", pathMatch:"full"},
    {path:'failed',component:ScannerComponent},
	{path:'verified',component:ScannerComponent}
   ]
  },

  {path:'schedule', component: ScheduleComponent, canActivate:[AdminGuardGuard]},
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
