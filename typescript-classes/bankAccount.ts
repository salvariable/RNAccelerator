class BankAccount {
    private accountnumber: string;
    protected balance: string;

    constructor(accountNumber: string, balance: string) {
        this.accountnumber = accountNumber;
        this.balance = balance;
    }

    public getAccountNumber(): string {
        return this.accountnumber;
    }

    public getBalance(): string {
        return this.balance;
    }
}

const myAccount = new BankAccount("123456789", "1000");
console.log(myAccount.getAccountNumber());
console.log(myAccount.getBalance());