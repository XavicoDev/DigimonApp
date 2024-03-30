import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  formLogin!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        const results = response.user;
        console.log(results);
        results.emailVerified ? this.router.navigate(['/digimon-list']): alert("Por favor verifique su correo electrónico para iniciar sesión.");
         
      })
      .catch(
        async error => {
          console.log(error);
          const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Inicio de sesión fallida',
            message: error,
            buttons: ['OK'],
          })

          await alert.present()
        }
      );
  }

}
