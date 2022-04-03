import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { StudentsComponent } from './students/students.component';
import { UsersComponent } from './users/users.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowUsersComponent } from './users/show-users/show-users.component';
import { AddEditUsersComponent } from './users/add-edit-users/add-edit-users.component';
import { ShowStudentsComponent } from './students/show-students/show-students.component';
import { AddEditStudentsComponent } from './students/add-edit-students/add-edit-students.component';
import { SharedService } from './shared.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditScheduleComponent } from './schedule/add-edit-schedule/add-edit-schedule.component';
import { ShowScheduleComponent } from './schedule/show-schedule/show-schedule.component';
import { VerifySucessComponent } from './scanner/verify-sucess/verify-sucess.component';
import { VerifyFailedComponent } from './scanner/verify-failed/verify-failed.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    StudentsComponent,
    UsersComponent,
    ScheduleComponent,
    ShowUsersComponent,
    AddEditUsersComponent,
    ShowStudentsComponent,
    AddEditStudentsComponent,
    HomePageComponent,
    LoginComponent,
    AddEditScheduleComponent,
    ShowScheduleComponent,
    VerifySucessComponent,
    VerifyFailedComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
	NgbModule
  ],
  providers: [SharedService, AdminGuardGuard, AuthGuard,
	{
		provide: HTTP_INTERCEPTORS,
		useClass: TokenInterceptorService,
		multi: true
	}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
