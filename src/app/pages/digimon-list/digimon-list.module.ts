import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonListPageRoutingModule } from './digimon-list-routing.module';

import { DigimonListPage } from './digimon-list.page';
import { DigimonService } from 'src/app/services/digimon.service';
import { HttpClientModule } from '@angular/common/http';
import { DigimonViewComponent } from 'src/app/components/digimon-view/digimon-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    DigimonListPage,
    DigimonViewComponent
  ],
  providers: [DigimonService]
})
export class DigimonListPageModule { }
