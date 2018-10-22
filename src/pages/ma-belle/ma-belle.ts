import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { ConnectApiProvider } from './../../providers/connect-api/connect-api';
import { Observable } from 'rxjs/Observable';
import { ModalPage } from '../modal/modal';
import { BasketPage } from '../basket/basket';
import { MaBelleProduct } from '../../models/product/product';

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
  categories: [any]
  products: Array<MaBelle> = []


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ConnectApiProvider,public modalCtrl: ModalController) {
    this.firstname = this.navParams.get('firstname')
  }

showProducts() {
  this.apiProvider.getProducts().subscribe( products =>{
    this.products = products
  });
}
showCategories() {
  this.apiProvider.getCategories().subscribe( categories =>{
    this.categories = categories
  });

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaBellePage');
    this.showProducts();
    this.showCategories();
  }

  onChange(x) {
    console.log(x.value);
    this.apiProvider.getProductByCategories(x.value).subscribe(products => {
     this.products = products
     })
  }

  presentProfileModal(product) {
    const profileModal = this.modalCtrl.create(ModalPage, {'product': product} );
    product.quantity = 1;
    profileModal.present();

 }

  goToBasketPage() {
    this.navCtrl.push(BasketPage)
  }



}
