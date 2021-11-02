import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';


@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  onSubmit(form: NgForm){
    if(this.staffService.formData.id == 0){
      this.insertStaff(form);
    }
    else{
      this.updateStaff(form);
    }
    
  }

  insertStaff(form: NgForm){
    this.staffService.postStaffData().subscribe(
      (res) => {
        this.staffService.getStaffList();
        this.resetForm(form);
        alert("Data Added")
      },
      (err) => {
        console.log(err);
        alert(err.error.message);
        
      }
    );
  }

  updateStaff(form: NgForm){
    this.staffService.putStaffData().subscribe(
      (res) => {
        this.resetForm(form);
        this.staffService.getStaffList();
        alert("Data Updated");
      },
      (err) => {
        console.log(err);
        alert(err.error.message);
        
      }
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.staffService.formData = new Staff();
  }

  ngOnInit(): void {
  }

}
