import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  standalone: true,
  imports: [NgFor],
})
export class DefaultComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
    // this.counter.update((oldCounter) => oldCounter + 1);
    // this.counter.set(5);
    this.counter.set(this.counter() + 1);
    this.actions.push("INCREMENT");
  }

  decrement() {
    // this.counter.update((oldCounter) => oldCounter - 1);
    this.counter.set(this.counter() - 1);

    this.actions.push("DECREMENT");
  }
}
