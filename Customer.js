class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    get FirstName() {
        return this.firstName;
    }
    set FirstName(value) {
        this.firstName = value;
    }
    get LastName() {
        return this.lastName;
    }
    set LastName(value) {
        this.lastName = value;
    }
    get Gender() {
        return this.gender;
    }
    set Gender(value) {
        this.gender = value;
    }
    get Age() {
        return this.age;
    }
    set Age(value) {
        this.age = value;
    }
    get MobileNumber() {
        return this.mobileNumber;
    }
    set MobileNumber(value) {
        this.mobileNumber = value;
    }
    get BankAccount() {
        return this.bankAccount;
    }
    set BankAccount(value) {
        this.bankAccount = value;
    }
    CustomerInfo() {
        return `
            Name:${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Mobile : ${this.mobileNumber}
            Account Balance : ${this.bankAccount}
        
        `;
    }
}
export {};
