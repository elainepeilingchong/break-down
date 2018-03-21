import { Payee } from './Payee';
export class PayerPayeePrice {
    private _id: number;
    private _payerId: number;
    private _payeeId: number;
    private _price: number;


    constructor(id: number, payerId: number, payeeId: number, price: number) {
        this._id = id;
        this._payerId = payerId;
        this._payeeId = payeeId;
        this._price = price;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get payerId(): number {
        return this._payerId;
    }

    public set payerId(value: number) {
        this._payerId = value;
    }

    public get payeeId(): number {
        return this._payeeId;
    }

    public set payeeId(value: number) {
        this._payeeId = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

}