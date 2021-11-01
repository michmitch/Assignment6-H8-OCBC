import { Component, OnInit } from '@angular/core';
import { Staff } from '../model/staff';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-data',
  templateUrl: './staff-data.component.html',
  styleUrls: ['./staff-data.component.css']
})
export class StaffDataComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  public isFormShowed: string = 'none';
  public isButtonShowed: string = '';

  ngOnInit(): void {
    this.staffService.getStaffList();
  }

  getisShowed(){
    return this.isFormShowed
  }

  showForm(){
    this.isFormShowed = '';
    this.isButtonShowed = 'none';
  }

  fillFormForEdit(selectedStaff: Staff){
    this.isFormShowed = '';
    this.isButtonShowed = 'none';
    this.staffService.formData = Object.assign({}, selectedStaff);    
  }

  deleteStaff(id: number, name:string){
    if(confirm(`Are you sure want to delete ${name}`)){
      this.staffService.deleteStaffData(id).subscribe(
        (res) => {
          this.staffService.getStaffList();
          alert("Data Deleted");
        },
        (err) => {
          console.log(err);
          
        }
      );
    }
    
  }

}
