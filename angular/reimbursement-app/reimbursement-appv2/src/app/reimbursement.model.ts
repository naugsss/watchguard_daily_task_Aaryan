export class ReimbursementModel {
  public id: string;
  public name: string;
  public amount: string;
  public type: string;

  constructor(id, name, amount, type) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.type = type;
  }
}
