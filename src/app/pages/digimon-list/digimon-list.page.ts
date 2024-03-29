import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigimonService } from 'src/app/services/digimon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.page.html',
  styleUrls: ['./digimon-list.page.scss']
})
export class DigimonListPage implements OnInit {

  digimons: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private digimonService: DigimonService
  ) { }

  ngOnInit() {
    this.loadDigimons();
  }

  async loadDigimons() {
    try {
      // this.digimons = await this.digimonService.getDigimons(20);
      this.digimonService.getDigimons(20).subscribe((data: any) =>{
        this.digimons = data.content;//Guardo el data del suscribe y lo asocio
        console.log(this.digimons); 
      });
    } catch (error) {
      console.error('Error al cargar los Digimons:', error);
    }
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
