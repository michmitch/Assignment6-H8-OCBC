import { Injectable } from '@angular/core';
import { Staff } from '../model/staff';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  formData: Staff = new Staff();
  endpoint: string = 'http://localhost:4000/users';
  staffList?: Staff[];

  postStaffData(){
    return this.http.post(this.endpoint, this.formData);
  }

  putStaffData(){
    return this.http.put(`${this.endpoint}/${this.formData.id}`, this.formData)
  }

  deleteStaffData(id: number){
    return this.http.delete(`${this.endpoint}/${id}`)
  }

  getStaffList(){
    this.http.get(this.endpoint).toPromise().then(res => this.staffList = res as Staff[]);
  }


  constructor(private http: HttpClient) { }
}
