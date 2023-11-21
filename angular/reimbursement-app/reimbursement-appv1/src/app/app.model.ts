export class App {
  public id: string;
  public name: string;
  public amount: string;
  public type: string;

  constructor(id: string, name: string, amount: string, type: string) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.type = type;
  }
}
