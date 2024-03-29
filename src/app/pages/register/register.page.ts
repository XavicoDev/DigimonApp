import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  formReg!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.formReg = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
