const Balance = require('./balance.js')

class Wallet {
  constructor(cashBalance = new Balance(100)) {
    this.cashBalance = cashBalance;
    this.cards = [];
  }

  add(amount) {
    this.cashBalance.add(amount);
    return this.cashBalance.total();
  }
}

module.exports = Wallet;
