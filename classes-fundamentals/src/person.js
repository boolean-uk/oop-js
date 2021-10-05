class Person {
  constructor() {
    this._name = "Edward"
  }

  get name() {
    return this._name
  }

  set name(str) {
    this._name = str
  }
}

const a = 5
addOne(a)
function addOne(num) {
  return num + 1
}


function Person() {
  console.log(this)
  this.a = 1
  this.b = 2
}

Person.prototype.hello = function() {
  return "Hello!"
}
