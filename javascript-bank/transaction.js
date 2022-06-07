/* exported Transaction */

function Transaction(type, amount) {
  if (amount < 0) {
    return false;
  }
  this.type = type;
  this.amount = amount;
}
