function BankAccount(name, balance) {
  this.name = name;
  this.balance = parseInt(balance);
}

BankAccount.prototype.deposit = function (number) {
  return this.balance + parseInt(number);
}

BankAccount.prototype.withdraw = function (number) {
  return this.balance - parseInt(number);
}