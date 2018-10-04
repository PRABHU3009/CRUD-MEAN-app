import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model'

declare var M :any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers : [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeservice : EmployeeService) { }

  ngOnInit() {
  	this.refreshEmplist();
  }

  resetForm(form? : NgForm){
  	if(form)
  		form.reset();
  	this.employeeservice.selectedEmployee = new Employee();
  }

  refreshEmplist(){
    this.employeeservice.getemp().subscribe((res)=>{
      this.employeeservice.employees = res as Employee[];
    })
  }

  onSubmit(form: NgForm) {
    if (form.value._id) {
      this.employeeservice.putemp(form.value).subscribe((res) => {
        this.resetForm();
        this.refreshEmplist();
        this.resetForm(form);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
    else {
      this.employeeservice.postemp(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.refreshEmplist();
      });
    }
  }

  onEdit(emp : Employee){
  	this.employeeservice.selectedEmployee=emp;
  }

  onDelete(_id : string, form :NgForm){
  	if(confirm("Are you sure to delete this employee record ")){
  		this.employeeservice.deleteemp(_id).subscribe((res)=>{
  			this.refreshEmplist();
  			this.resetForm();
  			M.toast({html : "Deleted successfully", classes : "rounded"} );
  		});
  	}
  }

  
}
