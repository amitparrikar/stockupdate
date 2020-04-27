import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SampleSlipPageRoutingModule } from './sample-slip-routing.module';

import { SampleSlipPage } from './sample-slip.page';
import { SealDetail } from './seal-detail/seal-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SampleSlipPageRoutingModule
  ],
  entryComponents: [SealDetail],
  declarations: [SampleSlipPage, SealDetail]
})
export class SampleSlipPageModule {}
