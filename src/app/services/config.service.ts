import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  SETTINGS_KEY = 'APP_CONFIG';

  constructor() {
  }

  /**
   * Save to localstorage
   * @param configData App Configuration data
   */
  setConfigData(configData) {
    window.localStorage.setItem(this.SETTINGS_KEY, configData);
  }

  /**
   * Get app config data from localstorage
   */
  getConfigData() {
    const settingData = window.localStorage.getItem(this.SETTINGS_KEY);

    if (settingData) {
      return JSON.parse(settingData);
    }

    return {};
  }

  setPDPData(data) {
    window.localStorage.setItem('PDP_DATA', data);
  }

  getPDPData() {
    return window.localStorage.getItem('PDP_DATA');

    // const pdpData = window.localStorage.getItem('PDP_DATA');

    // if (pdpData) {
    //   return JSON.parse(pdpData);
    // }

    // return {};
  }
}
