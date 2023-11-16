import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chole bhature',
      'It is awesome',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKsGf8G5Y-iLDLyk27OTY5f1NwKCG8D5yGw&usqp=CAU',
      [
        new Ingredient('Chole', 5),
        new Ingredient('Maida', 3),
        new Ingredient('Oil', 1),
      ]
    ),
    new Recipe(
      'Paani poori',
      'It tastes good with spices',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeR9IN8LYhXfZzP1dhuZVSLoddGgSMt3ptGQ&usqp=CAU',
      [new Ingredient('Poori', 15), new Ingredient('Potato', 5)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  //   if we do not use slice, then reference of the recipe array will go to other components and changing there will change the entire array so to avoid that we use slice to make a new copy and send a new exact copy of the recipe array
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
