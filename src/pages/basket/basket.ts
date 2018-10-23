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
    this.setTotalPrice(this.data)
  }

  setTotalPrice(data){
    let vm = this
    data.forEach(function(d) {
    vm.totalCommand = vm.totalCommand + d.price*d.quantity
    vm.totalArticles = vm.totalArticles + d.quantity
    });

  }

  getTotalPrice(){
    return this.totalCommand;
    return this.totalArticles
  }


}
