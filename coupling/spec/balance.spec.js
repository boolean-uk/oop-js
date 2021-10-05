const Balance = require('../src/balance.js')

describe('Balance', function () {
  let balance

  it('starts with 0 by default', function () {
    balance = new Balance()
    expect(balance.total()).toEqual(0)
  })

  it('can start with a balance of 10', function () {
    balance = new Balance(10)
    expect(balance.total()).toEqual(10)
  })

  it('can add 10 money to have 2 transactions', function () {
    balance = new Balance()
    const transactions = balance.add(10)

    expect(transactions.length).toEqual(2)
  })

  it('can add 10 money and have it in transactions', function () {
    balance = new Balance()
    const transactions = balance.add(10)
    expect(transactions.includes(10)).toEqual(true)
  })

  it('can add 10 money and have total 10', function () {
    balance = new Balance()
    balance.add(10)
    expect(balance.total(), 10)
  })
})
