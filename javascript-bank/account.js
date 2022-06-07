/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = {
    type: this.type,
    amount: this.amount
  };
  if (deposit.amount < 0) {
    return false;
  } else {
    this.transactions.push(deposit);
  }
};
