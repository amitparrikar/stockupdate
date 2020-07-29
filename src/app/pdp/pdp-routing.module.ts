import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdpPage } from './pdp.page';

const routes: Routes = [
  {
    path: '',
    component: PdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdpPageRoutingModule {}
