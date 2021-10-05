const Wallet = require('../src/wallet.js')

describe('Wallet', function () {
  it('add 10 to balance', function () {
    const wallet = new Wallet()
    expect(wallet.add(10)).toEqual(110)
  })

  it('adds 100 from balance', function () {
    const wallet = new Wallet()
    expect(wallet.add(100)).toEqual(200)
  })
})
