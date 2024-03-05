import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesComponent } from './leaves/leaves.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "leaves", component: LeavesComponent},
  
  {path: "employees", component: EmployeesComponent},
  {path: "new-employee", component: NewEmployeeComponent},
  { path: 'employees/:id/edit', component: EditEmployeeComponent },
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
