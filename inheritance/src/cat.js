class Cat {
  constructor (breed) {
    this.type = 'animal'
    this.breed = breed
  }

  sleep () {
    return 'zzzz'
  }

  speak () {
    return 'MIAOW'
  }
}

module.exports = Cat
