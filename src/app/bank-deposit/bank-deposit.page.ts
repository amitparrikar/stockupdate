import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.page.html',
  styleUrls: ['./bank-deposit.page.scss'],
})
export class BankDepositPage implements OnInit {

   c_2000 = null;
   c_500 = null;
   c_200 = null;
   c_100 = null;
   c_50 = null;
   c_20 = null;
   c_10 = null;
   c_1 = null;


  constructor() { }

  ngOnInit() {
  }

}
