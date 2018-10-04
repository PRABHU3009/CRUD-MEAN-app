export class Employee {

	constructor(_id = '', name = '', position= '', office='', salary = 0){
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }
	public _id: string;
	public name : string;
	public position:string;
	public office : string;
	public salary : number;
}
