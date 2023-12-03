class PartyPlanner {
  constructor() {
    this.guestList = [];
  }

  addToGuestList(guest) {
    this.guestList.push(guest);
  }

  throwParty() {
    if (this.guestList.length === 0) {
      return "Gotta add people to the guest list";
    }

    return `Welcome to the party ${this.guestList.join(" and ")}`;
  }
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty());
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = PartyPlanner;
} catch {
  module.exports = null;
}
