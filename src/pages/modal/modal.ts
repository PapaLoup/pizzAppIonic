import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { MaBelleProduct } from '../../models/product/product';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  product: Array<MaBelle> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.product = navParams.get('product')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    console.log(this.product.quantity);

  }
  addProduct() {
    this.product.quantity += 1
  }
  removeProduct() {
    if (this.product.quantity > 0) {
      this.product.quantity -= 1
    }

  }

  dismiss() {
   let data = { };
   this.viewCtrl.dismiss(data);
 }



}
