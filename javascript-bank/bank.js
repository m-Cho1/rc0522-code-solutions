/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAcct = new Account(this.nextAccountNumber, holder);
    newAcct.deposit(balance);
    this.accounts.push(newAcct);
    this.nextAccountNumber++;
    return newAcct.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var currentCustomer = this.accounts[i];
    if (currentCustomer.number === number) {
      return currentCustomer;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var currentCustomerBalance = this.accounts[i].getBalance();
    grandTotal += currentCustomerBalance;
  }
  return grandTotal;
};
