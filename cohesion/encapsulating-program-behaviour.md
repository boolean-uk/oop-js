# Encapsulating Program Behaviour

## Objectives

* Define `behaviour` as the thing a program does
* Explain that a `class` is a convenient encapsulation of behaviour
* Encapsulate program behaviour into cohesive classes.

## Introduction

In OOP, we break our programs up into multiple objects to control complexity. So how do we decide which methods and variables should live in which objects? What even is an object?

As programmers we strive for "low coupling and high cohesion". Today we're going to talk about cohesion. Do some research on the phrase if you wish to know about coupling.

### Cohesion

Each class should have one purpose or job, sometimes referred to as its responsibility.

A class has high cohesion when everything inside of it relates to that purpose, without anything extraneous. Perfection is achieved when there is nothing left to take away.

Take this example:

```js
class Square {
  constructor(length) {
    this.length = length
  }
  perimeter() {
    return this.length * 4
  }

  area() {
    return this.length ** 2
  }

  summary() {
    console.log(`Shape: Square`)
    console.log(`Length: ${this.length}`)
    console.log(`Perimeter: ${this.perimeter()}`)
    console.log(`Area: ${this.area()}`)
  }

  sayHiToEd() {
    console.log("Hi, Ed!")
  }
}
```
Let's imagine we wanted to group these methods by how related they seemed.

```

    * perimeter
                      * summary
      * area





                                         * sayHiToEd
```

Clearly `sayHiToEd` has nothing to do with any of the other methods.

We would re-group the methods into the following classes:

```js
class Square {
  constructor(length) {
    this.length = length
  }
  perimeter() {
    return this.length * 4
  }

  area() {
    return this.length ** 2
  }

  summary() {
    console.log(`Shape: Square`)
    console.log(`Length: ${this.length}`)
    console.log(`Perimeter: ${this.perimeter()}`)
    console.log(`Area: ${this.area()}`)
  }
}

class EdGreeter {
  sayHiToEd() {
    console.log("Hi, Ed!")
  }
}
```

What's the purpose of the `Square` class now? Could it be made even more cohesive?

## Exercise 1

**Use a diagram to group** the methods in these examples:

```
Bank
  - getBalance()
  - creditAccount(date, amount)
  - debitAccount(date, amount)
  - printStatement()
```

```
SecretDiary
  - lock()
  - unlock()
  - addEntry()
  - getEntries()
```

## Exercise 2

**Use a diagram to group** the methods in this example:

```js
class Calculator {
  add(num1, num2) {
    return num1 + num2
  }

  subtract(num1, num2) {
    return num1 - num2
  }

  print(ans) {
    console.log(`The answer is: ${ans}`)
  }
}
```

## Exercise 3

**Refactor** the methods in the Calculator example into two classes as you see fit.

## Exercise 4

```
SecretDiary
  - lock()
  - unlock()
  - addEntry()
  - getEntries()
```
**Diagram** the secret diary example, and then **implement** the following requirements:

- Initially the `SecretDiary` class is locked, meaning `addEntry(str)` and `getEntries()` should throw an error.
- When the user calls `unlock()`, `addEntry()` and `getEntries()` should work as desired.
- When the user calls `lock()` again `addEntry()` and `getEntries()` throw errors.

**First** organise it into one class only.

**Then**, reorganise it into classes with high cohesion.
