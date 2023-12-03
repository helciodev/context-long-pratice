class Dog {
  constructor(name) {
    this.name = name;
  }

  speak(word) {
    return `${this.name} says ${word}`;
  }

  changeName(newName) {
    this.name = newName;
  }

  static makeJet() {
    return new Dog("Jet");
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Dog;
} catch {
  module.exports = null;
}
