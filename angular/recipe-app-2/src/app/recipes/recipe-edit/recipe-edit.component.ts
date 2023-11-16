import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode:boolean = false
  constructor() {}
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activeRoute.params.subscribe((data) => {
      this.recipeId = +data['id'];
      this.editMode = data['id'] !== null
    });
  }
}
