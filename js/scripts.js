//Business Logic

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

//UI Logic
function handleNewAccountSubmission(event) {
  event.preventDefault();
  let name = document.getElementById("new-name").value;
  let balance = document.getElementById("initial-deposit").value;
  let bankAccount = new BankAccount(name, balance);
}

function handleDepositSubmission(event) {
  event.preventDefault();

}

function handleWithdrawSubmission(event) {
  event.preventDefault();

}

window.addEventListener("load", function() {
  const newAccountForm = document.getElementById("new-account");
  const depositForm = document.getElementById("deposit");
  const withdrawForm = document.getElementById("withdraw");
  newAccountForm.addEventListener("submit", handleNewAccountSubmission);
 depositForm.addEventListener("submit", handleDepositSubmission);
  withdrawForm.addEventListener("submit", handleWithdrawSubmission);
})