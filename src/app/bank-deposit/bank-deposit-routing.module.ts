import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankDepositPage } from './bank-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: BankDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankDepositPageRoutingModule {}
