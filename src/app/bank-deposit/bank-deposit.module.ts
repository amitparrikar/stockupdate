import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankDepositPageRoutingModule } from './bank-deposit-routing.module';

import { BankDepositPage } from './bank-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankDepositPageRoutingModule
  ],
  declarations: [BankDepositPage]
})
export class BankDepositPageModule {}
