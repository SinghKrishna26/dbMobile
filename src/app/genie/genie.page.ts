import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-genie',
  templateUrl: 'genie.page.html',
  styleUrls: ['genie.page.scss']
})
export class GeniePage {
  genieCheckbox:boolean = false;

  constructor(private _alertController: AlertController) {}

  async presentAlert(status:string) {
    const alert = await this._alertController.create({
      // header: 'Alert',
      // subHeader: 'Important message',
      message: `You have successfully ${status} dbGenie !!`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  checkboxChange() {
    if(this.genieCheckbox){
    this.presentAlert("activated");
    } else {
      this.presentAlert("de-activated");
    }
  }

}
