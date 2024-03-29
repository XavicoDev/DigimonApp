import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigimonListPage } from './digimon-list.page';

const routes: Routes = [
  {
    path: '',
    component: DigimonListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigimonListPageRoutingModule {}
