import { User } from './User';
import { Payer } from './Payer';
import { Payee } from './Payee';
export class Payment {
    private _id: number;
    private _price: number;
    private _payer: Array<Payer>;
    private _payee: Array<Payee>;
    private _createdDate: Date;
    private _title: string;
    private _note: string;

    constructor(id: number, price: number, payer: Array<Payer>, payee: Array<Payee>, createdDate: Date, title: string, note: string) {
        this._id = id;
        this._price = price;
        this._payee = payee;
        this._createdDate = createdDate;
        this._title = title;
        this._note = note;
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

    public get payer(): Array<Payer> {
        return this._payer;
    }

    public set payer(value: Array<Payer>) {
        this._payer = value;
    }

    public get payee(): Array<Payee> {
        return this._payee;
    }

    public set payee(value: Array<Payee>) {
        this._payee = value;
    }

    public get createdDate(): Date {
        return this._createdDate;
    }

    public set createdDate(value: Date) {
        this._createdDate = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get note(): string {
        return this._note;
    }

    public set note(value: string) {
        this._note = value;
    }

}