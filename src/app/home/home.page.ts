import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';

import { LoadingController } from '@ionic/angular';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date = '';
  isDisabled = false;
  dealerCode: string;
  mobileNumber = '+919223112222';
  // mobileNumber = '+919049051067';
  configData = null;

  msSale: number;
  hsdSale: number;
  spSale: number;
  msStock: number;
  hsdStock: number;
  spStock: number;

  constructor(
    private sms: SMS,
    private loadingCtrl: LoadingController,
    private configService: ConfigService
    ) {

    const dateVal = Date().split(' ');

    this.date = `${dateVal[2]} ${dateVal[1]} ${dateVal[3]}`;
    this.configData = configService.getConfigData();

    if (this.configData) {
      this.dealerCode = this.configData.dealerCode;
    }
  }
  // 1912466231

  onClear() {
    this.msSale = null;
    this.hsdSale = null;
    this.spSale = null;
    this.msStock = null;
    this.hsdStock = null;
    this.spStock = null;
  }

  saveDealerCode() {
    window.localStorage.setItem('DEALER_CODE', this.dealerCode);
  }

  async onSendSMS() {
    if (this.dealerCode) {
      const textMsg = this.composeMessage();

      if (textMsg === `STKSAL ${this.dealerCode}`) {
        alert('Stock/Sale Date required!');
        return;
      }

      const loading = await this.loadingCtrl.create({
        message: 'Please Wait'
      });

      const options = {
        replaceLineBreaks: false,
          android: {
              intent: 'INTENT'
          }
      };

      await loading.present();

      this.sms.send(this.mobileNumber, textMsg, options).then(res => {

        loading.dismiss();

        setTimeout(() => {
          alert('Stock Update SMS Sent');
        }, 0);

      }).catch(e => {

        loading.dismiss();

        setTimeout(() => {
          alert('Stock Update Failed, Please try again');
        }, 0);

      });
    } else {
      alert('Please Update Dealer Code!');
    }
  }

  composeMessage() {
    const msSale = Math.floor(this.msSale);
    const msStock = Math.floor(this.msStock);
    const hsdSale = Math.floor(this.hsdSale);
    const hsdStock = Math.floor(this.hsdStock);
    const spSale = Math.floor(this.spSale);
    const spStock = Math.floor(this.spStock);

    let message = `STKSAL ${this.dealerCode}`;

    if (msSale > 0 && msStock > 0) {
      message += `/MS${msStock}/${msSale}`;
    }

    if (hsdSale > 0 && hsdStock > 0) {
      message += `/HSD${hsdStock}/${hsdSale}`;
    }

    if (spSale > 0 && spStock > 0) {
      message += `/SP${spStock}/${spSale}`;
    }

    return message;
  }

  // onToggle() {
  //   this.dealerCode = null;
  //   this.mobileNumber = null;
  //   this.isDisabled = !this.isDisabled;
  // }
}
