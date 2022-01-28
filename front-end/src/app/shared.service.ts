import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl  = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/student/');
  }

  addStudent(val:any){
    return this.http.post(this.APIUrl + '/student/', val);
  }

  updateStudent(val:any){
    return this.http.put(this.APIUrl + '/student/', val);
  }

  deleteStudent(val:any){
    return this.http.delete(this.APIUrl + '/student/' + val);
  }

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/user/');
  }

  getUser(id:any){
    return this.http.get<any>(this.APIUrl + '/user/', id);
  }

  addUser(val:any){
    return this.http.post(this.APIUrl + '/user/', val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl + '/user/', val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl + '/user/' + val);
  }

  getScheduleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/schedule/');
  }

  addSchedule(val:any){
    return this.http.post(this.APIUrl + '/schedule/', val);
  }

  updateSchedule(val:any){
    return this.http.put(this.APIUrl + '/schedule/', val);
  }

  deleteSchedule(val:any){
    return this.http.delete(this.APIUrl + '/schedule/' + val);
  }
  
  login(val:any){
	return this.http.post(this.APIUrl + 'api/login/', val);
  }
  
  getUserRole(){
	return this.http.get(this.APIUrl + 'profile/');
  }
  
  loggedIn(){
	return !!localStorage.getItem('token');
  }
  
  getToken(){
	return localStorage.getItem('token');
  }
	
	
  logout(val:any){
	return this.http.post(this.APIUrl + '/logout/', val);
  }
}
