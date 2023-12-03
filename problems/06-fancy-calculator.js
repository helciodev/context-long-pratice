const Calculator = require("./02-calculator");

class FancyCalculator extends Calculator {
  constructor(total = 0) {
    super(total);
  }
  setTotal(newTotal) {
    this.total = newTotal;
    return this.total;
  }

  squared() {
    this.total *= this.total;
    return this.total;
  }

  modulo(num) {
    this.total %= num;
    return this.total;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
