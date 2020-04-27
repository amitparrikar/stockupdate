import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleSlipPage } from './sample-slip.page';

const routes: Routes = [
  {
    path: '',
    component: SampleSlipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleSlipPageRoutingModule {}
