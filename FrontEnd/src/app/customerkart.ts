import { Pizza } from "./pizza";

export class Customerkart {
    emailid!:string;
    password!:string;
    fullname!:string;
    phoneno!: string;
    address!: string;
    pincode!: string;
    pizzaOrders!: Array<Pizza>;

    constructor(emailid:string,
        password:string,
        fullname:string,
        phoneno: string,
        address: string,
        pincode: string,
        pizzaOrders: Array<Pizza>){
            this.emailid = emailid;
            this.password = password;
            this.fullname = fullname;
            this.phoneno = phoneno;
            this.address = address;
            this.pincode = pincode;
            this.pizzaOrders = pizzaOrders;
        }
}
