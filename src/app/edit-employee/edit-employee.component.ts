import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editForm!: FormGroup;
  employee?: Employee;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    const employeeId: number = Number(this.route.snapshot.paramMap.get('id'));
    console.warn("employee id ::", employeeId);


    this.employeeService.getEmployeeById(employeeId).subscribe(employee => {
      this.employee = employee;
      this.editForm!.patchValue({
        firstName: employee.firstName,
        lastName: employee.lastName,
        salary: employee.salary,
        departement: employee.departement,
        // Add more fields as needed
      });
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      salary: [''],
      departement: [''],
      // Add more form controls for other employee properties
    });
  }

  onSubmit() {
    if (this.editForm!.valid) {
      const editedEmployee: Employee = {
        id: Number(this.employee?.id),
        firstName: this.editForm?.value.firstName,
        lastName: this.editForm?.value.lastName,
        salary: this.editForm?.value.salary,
        departement: this.editForm?.value.departement,
        // Populate other fields as needed
      };

      this.employeeService.updateEmployee(this.employee!.id, editedEmployee).subscribe(() => {
        // Navigate back to employee list after editing
        this.router.navigate(['/employees']);
      });
    }
  }
}
