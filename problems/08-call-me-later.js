class CallCenter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello this is ${this.name}`);
  }

  callMeLater = (time) => {
    setTimeout(() => {
      console.log(`Hello this is ${this.name}`);
    }, time);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = CallCenter;
} catch {
  module.exports = null;
}
