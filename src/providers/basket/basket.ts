/*
  Generated class for the BasketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



export class BasketProvider {

  data = []
  totalCommand = 0
  totalArticles = 0

  constructor() {
    console.log('Hello BasketProvider Provider');

  }

  setBasketData(donnee) {
    this.data.push(donnee)
    // this.setTotalArticles(this.data)
  }

  getData() {
    return this.data;
  }

  setTotalPrice(data) {
    let vm = this
    vm.totalCommand = 0
    data.forEach(function(d) {
      vm.totalCommand = vm.totalCommand + d.price * d.quantity
    });
  }

  setTotalArticles(data) {
    let vm = this
    vm.totalArticles = 0
    data.forEach(function(d) {
      vm.totalArticles = vm.totalArticles + d.quantity
    });

  }

  getTotalPrice() {
    return this.totalCommand;
  }

  getTotalArticles() {
    return this.totalArticles
  }

}
