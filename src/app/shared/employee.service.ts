import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
	selectedEmployee : Employee;
	employees : Employee[];

	readonly baseurl = '/employee';
  constructor(private http : HttpClient) {
    this.selectedEmployee = new Employee();
  }

  postemp(emp : Employee){
  	console.log(emp);
  	return this.http.post(this.baseurl,emp);
  }

  getemp(){
  	return this.http.get(this.baseurl);
  }

  putemp(emp:Employee){
  	console.log(emp);
  	return this.http.put(this.baseurl+`/${emp._id}`,emp);
  }

  deleteemp(_id: string){
    console.log(this.baseurl+"/"+_id);
  	return this.http.delete(this.baseurl+"/"+_id);
    
  }
}
