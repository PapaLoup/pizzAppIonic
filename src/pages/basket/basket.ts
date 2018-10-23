import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product/product';
import { BasketProvider } from './../../providers/basket/basket';

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
  products: Array<Product> = [];
  data: any
  totalCommand = 0
  totalArticles = 0

  constructor(public basketProvider: BasketProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.data = basketProvider.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    console.log(this.data + "loooooooooooool");
    this.basketProvider.setTotalPrice(this.data);
    this.basketProvider.setTotalArticles(this.data);
    this.totalCommand = this.basketProvider.getTotalPrice();
    this.totalArticles = this.basketProvider.getTotalArticles()
  }

}
