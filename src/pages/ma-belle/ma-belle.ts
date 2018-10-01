import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaBellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage() Lien a supprimer pour le module.ts
@Component({
  selector: 'page-ma-belle',
  templateUrl: 'ma-belle.html',
})
export class MaBellePage {

  firstname : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstname = this.navParams.get('firstname')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaBellePage');
  }

}
