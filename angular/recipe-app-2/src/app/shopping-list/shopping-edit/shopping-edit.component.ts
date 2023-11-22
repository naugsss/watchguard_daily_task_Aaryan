import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') Shoppingform: NgForm;
  subscription: Subscription;
  editingMode: boolean = false;
  editingItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.editingItem.subscribe(
      (index: number) => {
        this.editingItemIndex = index;
        this.editingMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.Shoppingform.setValue({
          amount: this.editedItem.amount,
          name: this.editedItem.name,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editingMode) {
      this.slService.updateIngredient(this.editingItemIndex, newIngredient);
      this.editingMode = !this.editingMode;
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.Shoppingform.reset();
  }

  onClear() {
    this.Shoppingform.reset();
    this.editingMode = false;
    this.slService.clearIngredient();
  }

  onDeleteItem() {
    if (this.editingMode) {
      this.slService.deleteIngredient(this.editingItemIndex);
      this.Shoppingform.reset();
      this.editingMode = false;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
