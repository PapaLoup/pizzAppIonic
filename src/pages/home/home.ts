import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MaBellePage } from '../ma-belle/ma-belle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nametest :string
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

}
gotoMaBellePage():void{
    this.navCtrl.push(MaBellePage, {
      firstname: "PPL",
    });
  }
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();
}

presentPrompt() {




  let alert = this.alertCtrl.create({
    // this.navCtrl.push(MaBellePage, {
    //   firstname: "PPL",
    // },
    title: 'Login',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },

    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          this.navCtrl.push(MaBellePage, {
            firstname: data.username
          });
        }
      }
    ]
  });
  alert.present();
}
}
