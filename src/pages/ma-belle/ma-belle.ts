import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectApiProvider } from './../../providers/connect-api/connect-api';
import { Observable } from 'rxjs/Observable';
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
  categories: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ConnectApiProvider) {
    this.firstname = this.navParams.get('firstname')
    this.apiProvider.getCategories().subscribe(categories=>{
      this.categories = categories.data.data
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaBellePage');
  }

}
