import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../../shared/services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../../../shared/interfaces/recipe';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  recipes: Recipe[] = [];
	preLoader: boolean = true;
	hideWhenNoCategory: boolean = false;
	noData: boolean = false;

	constructor(private categoryService: RecipeService, private router: Router) { 
		this.getRecipes()
	}

	ngOnInit(): void {
	}
	// CALL PRODUCTS ARRAY
	async getRecipes() {
		this.recipes = await this.categoryService.getAllRecipes();
	}

  deleteRecipe(id: string, position: number) {
		this.categoryService.deleteRecipe(id)
		.then((result) => {
			this.recipes.splice(position, 1)
		})
	}
}
