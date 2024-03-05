import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSevice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.userFormGroup = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null)
    })
  }

  handleLogin() {
    console.log("******************* form submit ************");
 
    let user: any = this.userFormGroup.value;

    this.userSevice.login(user).subscribe(
      (data: any) => {
        if(data.role === "EMPLOYEE"){
          alert("EMPLOYEE");
          this.router.navigateByUrl("employees");
        }
        if(data.role === "MANAGER"){
          alert("MANAGER");
          this.router.navigateByUrl("login");
        }

      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
