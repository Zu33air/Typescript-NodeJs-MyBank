export class BankAccount {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    get AccountBalance() {
        return this.accountBalance;
    }
    set AccountBalance(value) {
        this.accountBalance = value;
    }
    Debit(amount) {
        var statement = "Sorry, You Have Insufficient Balance !";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.accountBalance > amount) {
                this.accountBalance = this.accountBalance - amount;
                statement = `Transaction successfull New Account Balance is ${this.accountBalance}`;
            }
            else {
                statement = `You don't have enough money to do this transaction`;
            }
        }
        return statement;
    }
    Credit(amount) {
        var statement = "Transaction failed!";
        if (amount > 0) {
            this.accountBalance = this.accountBalance + amount;
            if (amount > 100) {
                this.accountBalance = this.accountBalance - 1;
            }
            statement = "Your account has been credited successfully!";
        }
        return statement;
    }
}
