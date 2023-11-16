import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a desc',
      'https://th.bing.com/th/id/OIP._-Rdibz6MzDiUa-d_8zgdgHaFE?pid=ImgDet&rs=1'
    ),
  ];

  @Output() ValueClicked = new EventEmitter<string>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit();
  }

  onValueClicked(){
    this.ValueClicked.emit("hii there")
  }

}
