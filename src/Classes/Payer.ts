import { PayerPayeePrice } from './PayeePrice';
import { Payee } from './Payee';
import { User } from './User';
export class Payer {
    private _id: number;
    private _paymentId: number;
    private _user: User;
    private _pricePaid: number;
    private _payeePrice:Array<PayerPayeePrice>;
    private _remainingAmount: number;

    constructor(id: number, paymentId: number, user: User, pricePaid: number, payee: Array<PayerPayeePrice>, remainingAmount: number) {
        this._id = id;
        this._paymentId = paymentId;
        this._user = user;
        this._pricePaid = pricePaid;
        this._payeePrice = payee;
        this._remainingAmount = remainingAmount;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get paymentId(): number {
        return this._paymentId;
    }

    public set paymentId(value: number) {
        this._paymentId = value;
    }

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }

    public get pricePaid(): number {
        return this._pricePaid;
    }

    public set pricePaid(value: number) {
        this._pricePaid = value;
    }

    public get payeePrice(): Array<PayerPayeePrice> {
        return this._payeePrice;
    }

    public set payeePrice(value: Array<PayerPayeePrice>) {
        this._payeePrice = value;
    }

    public get remainingAmount(): number {
        return this._remainingAmount;
    }

    public set remainingAmount(value: number) {
        this._remainingAmount = value;
    }

}