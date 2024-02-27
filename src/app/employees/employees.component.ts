import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees!: Array<Employee>;
  errorMessages: Object | undefined;
  searchFormGroup!: FormGroup;
  // * or 
  // errorMessages!: Object;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder){}

  ngOnInit(): void{
    this.employeeService.getEmployees().subscribe({
      next: (data)=>{
        this.employees = data;
      },
      error: (err)=>{
        this.errorMessages = err.message;
      }
    });

    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
  }

  handleSearchEmployees() {
    let kw = this.searchFormGroup?.value.keyword;
    this.employeeService.searchEmployees(kw).subscribe({
      next: (data)=>{
        this.employees = data;
      },
      error: (err)=>{
        this.errorMessages = err.message;
      }
    });
  }

  handleDeleteEmployee(id: number) {
    let conf = confirm("ghjklm");
    if(!conf) return;
    this.employeeService.deleteEmployee(id).subscribe({
      next: (data)=>{
        this.employees = this.employees.filter(employee => employee.id != id);
      },
      error: (err)=>{
        console.warn(err);
      }
    })
  }

}
