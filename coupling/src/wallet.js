const Balance = require('./balance.js')

class Wallet {
  constructor () {
    this.cashBalance = new Balance(100)
    this.cards = []
  }

  add (amount) {
    this.cashBalance.add(amount)
    return this.cashBalance.total()
  }
}

module.exports = Wallet
