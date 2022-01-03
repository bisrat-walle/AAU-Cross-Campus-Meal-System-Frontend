import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'student', component: StudentsComponent},
  {path:'user', component: UsersComponent},
  {path:'scanner', component: ScannerComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
