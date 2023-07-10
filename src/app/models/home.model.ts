interface Response {
    accountNumber : string;
    accountHolderName : string;
    accountType : string;
    accountBalance : string;
}
export class Home {
    account : string;
    name : string;
    type : string;
    amount : string;

    constructor(dto : Response){
        this.account = dto.accountNumber;
        this.name = dto.accountHolderName;
        this.type = dto.accountType;
        this.amount = dto.accountBalance;
    }
}