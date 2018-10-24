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
  products: Array<Product> = []
  data: any
  totalCommand = 0
  totalArticles = 0

  constructor(public basketProvider: BasketProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.data = basketProvider.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
    console.log(this.data + "loooooooooooool");
    // getTotalArticles(this.data)
  }

  addProduct(d) {
    console.log(d.quantity)
    d.quantity = d.quantity + 1
  }
  removeProduct(d) {
    if (d.quantity > 1) {
      d.quantity = d.quantity - 1

    } else {
      this.trashProduct(d)
    }
  }

  trashProduct(d) {
    this.data.splice(d, 1);

  }

}
