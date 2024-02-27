import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LeavesComponent } from './leaves/leaves.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {path: "leaves", component: LeavesComponent},
  
  {path: "employees", component: EmployeesComponent},
  {path: "new-employee", component: NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
