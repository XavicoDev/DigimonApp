import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-digimon-view',
  templateUrl: './digimon-view.component.html',
  styleUrls: ['./digimon-view.component.scss'],
})
export class DigimonViewComponent  implements OnInit {

  @Input() digimon: any;
  digimonExtendData: any;

  constructor(
    private digimonService: DigimonService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.digimon);
    this.digimonService.getDigimon(this.digimon.id).subscribe((data: any) =>{
      this.digimonExtendData = data  ;//Guardo el data del suscribe y lo asocio
      console.log(this.digimonExtendData); 
    });
  }

  confirm() {
    return this.modalCtrl.dismiss( );
  }

}
