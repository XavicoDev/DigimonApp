import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DigimonViewComponent } from 'src/app/components/digimon-view/digimon-view.component';
import { DigimonService } from 'src/app/services/digimon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.page.html',
  styleUrls: ['./digimon-list.page.scss']
})
export class DigimonListPage implements OnInit {

  digimons: any[] = []; 
  pageable: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private digimonService: DigimonService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadDigimons();
  }

  async loadDigimons() {
    try {
      // this.digimons = await this.digimonService.getDigimons(20);
      this.digimonService.getDigimons('https://digi-api.com/api/v1/digimon').subscribe((data: any) =>{
        this.digimons = data.content;
        this.pageable = data.pageable;
        console.log(this.digimons); 
      });
    } catch (error) {
      console.error('Error al cargar los Digimons:', error);
    }
  }

  previousPage(){
    try {
      // this.digimons = await this.digimonService.getDigimons(20);
      this.digimonService.getDigimons(this.pageable.previousPage).subscribe((data: any) =>{
        this.digimons = data.content;
        this.pageable = data.pageable;
        console.log(this.digimons); 
      });
    } catch (error) {
      console.error('Error al cargar los Digimons:', error);
    }
  }

  nextPage(){
    try {
      // this.digimons = await this.digimonService.getDigimons(20);
      this.digimonService.getDigimons(this.pageable.nextPage).subscribe((data: any) =>{
        this.digimons = data.content;
        this.pageable = data.pageable;
        console.log(this.digimons); 
      });
    } catch (error) {
      console.error('Error al cargar los Digimons:', error);
    }
  }

  async presentModal(digimon: any) {
    const modal = await this.modalController.create({
      component: DigimonViewComponent,
      componentProps: {
        digimon: digimon
      }
    });
    return await modal.present();
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  } 

  onImageError(event: any) {
    event.target.src = '../../assets/img/File_not_found.jpg';
  }
  

}
