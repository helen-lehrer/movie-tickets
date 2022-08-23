Describe: BankAccount();

Test: This should create a bank account constrcutor that holds a name and balance property.

Code:
let bankAccount = BankAccount();
bankAccount();

expected output: 
>BankAccount();
  >name: "nameInput";
  >deposit: initialDepositInput;

-------------------------------

Test: This should create a method called deposit() that will add the deposit amount to the balance.

Code:
bankAccount.deposit(number);

expected output: 
>bankAccount();
  >name: "nameInput";
  >deposit: initialDepositInput + number;

------------------------------

Test: This should create a method called withdraw() that wil subtract the withdrawl amount from the balance.a

Code:
bankAccount.withdraw(number);

expected output: 
>bankAccount.withdraw("number");
balance - "number"
