function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}
function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
