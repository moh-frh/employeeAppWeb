import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>("http://localhost:8080/employees")
  }
  public getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>("http://localhost:8080/employees/"+id);
  }
  public searchEmployees(keyword: string): Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>("http://localhost:8080/employees/search?keyword="+keyword);
  }
  public saveEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>("http://localhost:8080/employees", employee);
  }
  public deleteEmployee(id: number){
    return this.http.delete("http://localhost:8080/employees/"+id);
  }
  public updateEmployee(id: number, employee: Employee){
    return this.http.put("http://localhost:8080/employees/"+id, employee);
  }
}
