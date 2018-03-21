import { User } from './User';
import { Payment } from './Payment';
export class Group {
    private _id: number;
    private _name: string;
    private _description: string;
    private _members: Array<User>;
    private _createdDate: Date;
    private _payments: Array<Payment>;

    constructor(id: number, name: string, description: string, members: Array<User>, createdDate: Date, payments: Array<Payment>) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._members = members;
        this._createdDate = createdDate;
        this._payments = payments;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }


    public get members(): Array<User> {
        return this._members;
    }

    public set members(value: Array<User>) {
        this._members = value;
    }

    public get createdDate(): Date {
        return this._createdDate;
    }

    public set createdDate(value: Date) {
        this._createdDate = value;
    }

    public get payments(): Array<Payment> {
        return this._payments;
    }

    public set payments(value: Array<Payment>) {
        this._payments = value;
    }

}
