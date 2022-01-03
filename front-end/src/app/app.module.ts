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

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule,
	NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
