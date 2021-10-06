# Coupling

> a loosely coupled system is one in which each of its components has, or makes use of, little or no knowledge of the definitions of other separate components.


### Learning Objectives
- Explain what coupling is
- Refactor code to go from tight coupling to loose coupling.

### To run tests

```sh
$ npx jasmine
# or
$ npm test
```

### To lint code

```sh
# eg: linting src code
$ npx eslint src --fix
```


### Intro

> An example of tight coupling occurs when a dependent class contains a pointer directly to a concrete class which provides the required behavior. The dependency cannot be substituted, or its "signature" changed, without requiring a change to the dependent class. Loose coupling occurs when the dependent class contains a pointer only to an interface, which can then be implemented by one or many concrete classes.

Consider the following example. Note how the class `Balance` is hardcoded inside the constructor function body. What would need to change if we needed a `Wallet` with a different starting balance?
```js
class Wallet {
  constructor() {
    this.cashBalance = new Balance(100);
    this.cards = [];
  }

  add(amount) {
    this.cashBalance.add(amount);
    return this.cashBalance.total();
  }
}
// This implementation of Wallet is tightly coupled to the Balance class
```

One way to move towards looser coupling is to move the pointer to the class definition _outside_ of the class as you can see below. `Wallet` now only refers to the abstraction - a named argument which we can use at runtime - and the interface of the abstraction (it must still implement `#add()` and `#total()`)

```js
class Wallet {
  constructor(cashBalance) {
    this.cashBalance = cashBalance
    this.cards = []
  }
  // ...
}

let wallet1 = new Wallet(new Balance(20))
let wallet2 = new Wallet(new Balance(500))
// or even
let wallet3 = new Wallet(new HiddenBalance(1000000)) // as long it implements the same interface
```
Another approach is similar and allows for less need to always specify dependencies at runtime: use default arguments like below.
```js
class Wallet {
  constructor(cashBalance = new Balance(50)) {
    this.cashBalance = cashBalance
    this.cards = []
  }
  // ...
}

let wallet;
wallet = new Wallet()
// or
wallet = new Wallet(new Balance(10000))
```

## Instructions

- [ ] `npm install` the dependencies for this project
- [ ] run tests using `npx jasmine`
- [ ] Decouple the tests for the `Wallet` and `Balance` example - isolate the subject under test in the wallet spec.
- [ ] Investigate an example implementation in `/_solutions`. What reflections do you have on this approach? How could this be improved?
