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
        const user = response.user;
        user.emailVerified ?
          this.router.navigate(['/digimon-list']) :
          alert(`Usuario ${user.displayName}, por favor verifique su correo electrónico para iniciar sesión.`);
      })
      .catch(
        async error => {
          let errorMessage: string;
          switch (error.code) {
            case 'auth/invalid-credential':
              errorMessage = 'Credenciales inválidas.';
              break;
            case 'auth/user-not-found':
              errorMessage = 'Usuario no encontrado';
              break;
            case 'auth/wrong-password':
              errorMessage = 'Contraseña incorrecta';
              break;
            default:
              errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
          }
          const alert = await this.alertController.create({
            header: 'Alerta!',
            subHeader: 'Inicio de sesión fallida',
            message: errorMessage,
            buttons: ['OK'],
          })
          await alert.present()
        }
      );
  }

}
