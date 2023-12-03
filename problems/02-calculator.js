// Your code here
class Calculator {
  constructor() {
    this.total = 0;
  }

  add(valueToSum) {
    this.total += valueToSum;
    return this.total;
  }

  subtract(value) {
    this.total -= value;
    return this.total;
  }

  multiply(value) {
    this.total *= value;
    return this.total;
  }

  divide(value) {
    this.total /= value;
    return this.total;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = Calculator;
} catch {
  module.exports = null;
}
