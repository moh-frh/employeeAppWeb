import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSevice: UserService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.userFormGroup = this.fb.group({
      username: this.fb.control(null),
      email: this.fb.control(null),
      password: this.fb.control(null),
      role: this.fb.control(null),
    })
  }

  handleSaveUser() {
    console.log("******************* form submit ************");

    let user: any = this.userFormGroup.value;
    console.warn("user : ", user);

    // if (this.user.role == 'librarian') 
    //   this.user.role.id = 1;
    // else this.user.role.id = 2;

    this.userSevice.addUser(user).subscribe(
      (data: any) => {
        console.log(data);
        alert("User has been succesfully added");

        this.router.navigateByUrl("login");
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
