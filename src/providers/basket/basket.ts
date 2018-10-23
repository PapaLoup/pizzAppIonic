/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class BasketProvider {

  data = []

  constructor() {
    console.log('Hello BasketProvider Provider');

  }

  setBasketData(donnee) {
    this.data.push(donnee)
  }

  getData(){
        return this.data;
    }

}
