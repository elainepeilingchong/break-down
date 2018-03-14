import { User } from './User';
export class Payment {
    private _id: number;
    private _price: number;
    private _payee: User;

    constructor(id: number, price: number, payee: User) {
        this._id = id;
        this._price = price;
        this._payee = payee;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get payee(): User {
        return this._payee;
    }

    public set payee(value: User) {
        this._payee = value;
    }

}