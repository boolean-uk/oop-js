const Wallet = require('../src/wallet.js')

// test double
class BalanceDouble {
  add() {}
  total() { return "total" }
}

describe("Wallet", function() {
  it("add 10 to balance", function() {
    let wallet = new Wallet(new BalanceDouble())
    expect(wallet.add(10)).toEqual("total");
  })

  it("adds 100 from balance", function() {
    let wallet = new Wallet(new BalanceDouble())
    expect(wallet.add(100)).toEqual("total");
  })
})
