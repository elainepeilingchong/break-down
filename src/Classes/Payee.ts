import { User } from './User';
export class Payee {
	private _id: number;
	private _paymentId: number;
	private _user: User;
	private _priceOwe: number;
	private _note: string;
	private _quantity: number;

	constructor(id: number, paymentId: number, user: User, priceOwe: number, note: string, quantity: number) {
		this._id = id;
		this._paymentId = paymentId;
		this._user = user;
		this._priceOwe = priceOwe;
		this._note = note;
		this._quantity = quantity;
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

	public get priceOwe(): number {
		return this._priceOwe;
	}

	public set priceOwe(value: number) {
		this._priceOwe = value;
	}

	public get note(): string {
		return this._note;
	}

	public set note(value: string) {
		this._note = value;
	}

	public get quantity(): number {
		return this._quantity;
	}

	public set quantity(value: number) {
		this._quantity = value;
	}


}