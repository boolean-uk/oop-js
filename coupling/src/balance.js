class Balance {
  constructor (startAmount = 0) {
    this.transactions = []
    this.add(startAmount)
  }

  add (amount) {
    this.transactions.push(amount)
    return this.transactions
  }

  total () {
    return this.transactions.reduce((val1, val2) => val1 + val2)
  }
}

module.exports = Balance
