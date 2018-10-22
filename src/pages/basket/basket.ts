import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MaBelleProduct } from '../../models/product/product';


/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
  products: Array<MaBelle> = []
  basket: []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    console.log();
  }

}
