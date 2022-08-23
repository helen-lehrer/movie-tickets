function BankAccount(name, balance) {
  this.name = name;
  this.balance = parseInt(balance);
}

BankAccount.prototype.deposit = function (number) {
  return this.balance + parseInt(number);
}
