import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { LoadingController } from '@ionic/angular';

import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.page.html',
  styleUrls: ['./pdp.page.scss'],
})
export class PdpPage implements OnInit {

  mobileNumber = '+919223112222';
  dealerCode;
  vehicleNumber;
  msPDP;
  hsdPDP;
  spPDP;
  tripArray = [];
  configData: any;
  pdpData: any;
  smsMessage = '';
  dateToday: string;

  constructor(
    private sms: SMS,
    private loadingCtrl: LoadingController,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    let d = new Date();
    d.setDate(d.getDate() + 1);
    this.dateToday = d.toLocaleDateString('en-IN');

    this.configData = this.configService.getConfigData();
    this.pdpData = this.configService.getPDPData();

    if (this.pdpData) {
      const tempData = this.pdpData.split('=');
      const date = tempData[0];
      const dateToday = new Date();

      if (date === dateToday.toLocaleDateString()) {
        this.tripArray = JSON.parse(tempData[1]);
      } else {
        this.tripArray = [];
      }

      this.updateLocalStorage();
    }

    if (this.configData) {
      this.dealerCode = this.configData.dealerCode;
      this.vehicleNumber = this.configData.vehicleNumber.replace(/ /gim, '');
    }

    if (!this.dealerCode) {
      alert('Please Update Dealer Code in Settings');
    }
  }

  onRemovePDP(index) {
    this.tripArray.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    const date = new Date();
    const dateStr = date.toLocaleDateString();
    this.configService.setPDPData(dateStr + '=' + JSON.stringify(this.tripArray));
  }

  onAddPDP() {
    if (this.dealerCode) {
      if (this.msPDP || this.hsdPDP || this.spPDP) {
        this.tripArray.push({
          dealerCode: this.dealerCode,
          vehicleNumber: this.vehicleNumber,
          msPDP: this.msPDP,
          hsdPDP: this.hsdPDP,
          spPDP: this.spPDP
        });

        this.msPDP = '';
        this.hsdPDP = '';
        this.spPDP = '';
      } else {
        alert('Please enter load in KL');
      }
    } else {
      alert('Please Update Dealer Code in Settings');
    }
  }

  composeMessage() {
    let smsMessage = `PDP ${this.dealerCode}`;

    this.tripArray.forEach((val, indx) => {
      const tripCount = indx + 1;
      const vehNumber = val.vehicleNumber;
      const ms = `000${val.msPDP}`.slice(-3);
      const hsd = `000${val.hsdPDP}`.slice(-3);
      const spd = `000${val.spPDP}`.slice(-3);

      if (tripCount === 1) {
        smsMessage += ` ${tripCount} ${vehNumber}`;
      } else {
        smsMessage += ` PDP ${tripCount} ${vehNumber}`;
      }

      if (val.msPDP > 0) {
        smsMessage = smsMessage + ` MS${ms}`;
      }
      if (val.hsdPDP > 0) {
        smsMessage = smsMessage + ` HSD${hsd}`;
      }
      if (val.spPDP > 0) {
        smsMessage = smsMessage + ` SP${spd}`;
      }
    });

    return smsMessage;
  }

  onSendSMS() {
    if (this.tripArray.length > 0) {
      this.sendSms(this.composeMessage());
      this.updateLocalStorage();
    } else {
      alert('Please Add atleast one PDP');
    }
  }

  async sendSms(smsMessage) {

    const loading = await this.loadingCtrl.create({
      message: 'Composing PDP SMS'
    });
    const options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
      }
    };

    await loading.present();

    this.sms.send(this.mobileNumber, smsMessage, options).then(res => {
      loading.dismiss();
    }).catch(e => {
      loading.dismiss();
      setTimeout(() => {
        alert('PDP Update Failed, Please try again');
      }, 0);
    });

  }

  onCancelPDP() {
    const message = `PDP ${this.dealerCode} CANCEL`;

    if (confirm('Are you sure ?')) {
      this.sendSms(message);
    }
  }
}
