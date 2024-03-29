import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigimonListPageRoutingModule } from './digimon-list-routing.module';

import { DigimonListPage } from './digimon-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigimonListPageRoutingModule
  ],
  declarations: [DigimonListPage]
})
export class DigimonListPageModule {}
