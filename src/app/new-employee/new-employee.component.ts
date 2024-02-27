import { EmployeeService } from './../services/employee.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {


  newEmployeeFormGroup!: FormGroup;

  constructor( private fb: FormBuilder,
               private employeeService: EmployeeService,
               private router: Router){}

  ngOnInit(): void{
    this.newEmployeeFormGroup = this.fb.group({
      firstName: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      lastName: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      salary: this.fb.control(null),
      departement: this.fb.control(null),
    })
  }

  handleSaveEmployee() {
    let employee: Employee = this.newEmployeeFormGroup.value;
    console.warn("employee : ", employee);
    this.employeeService.saveEmployee(employee).subscribe({
      next: (data)=>{
        alert("Employee has been succesfully added");
        this.router.navigateByUrl("/employees");
      },
      error: (err)=>{
        console.warn(err);
      }
    })
  }

}
