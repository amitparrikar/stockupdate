import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  formData: any = {
    oilCompany: null,
    roName: null,
    dealerCode: null,
    roAddress: null,
    supplyLocation: null,
    territoryOffice: null,
    dealerName: null,
    transportName: null,
    vehicleNumber: null,
    driverName: null
  };

  constructor(private configService: ConfigService) {

    this.formData = configService.getConfigData();

   }

  ngOnInit() {
  }

  onSaveSettings() {
    this.configService.setConfigData(JSON.stringify(this.formData));
  }
}
