import { Component, OnInit, Input, inject } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((data) => {
      this.recipeId = +data['id'];
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });

    console.log(this.recipeId);
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
