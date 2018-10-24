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

  getTotalArticles(data) {
    let totalArticle;
    data.forEach(function(d) {
    totalArticle = d.quantity + totalArticle
    });
    console.log(totalArticle)
    return totalArticle
  }

}
