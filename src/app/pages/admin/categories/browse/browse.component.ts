import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { CategoryService } from '../../../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-browse',
	templateUrl: './browse.component.html',
	styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

	categories: Category[] = [];
	preLoader: boolean = true;
	hideWhenNoCategory: boolean = false;
	noData: boolean = false;

	constructor(private categoryService: CategoryService, private router: Router) { 
		this.getCategories()

	}

	ngOnInit(): void {
	}
	// CALL PRODUCTS ARRAY
	async getCategories() {
		this.categories = await this.categoryService.getAllCategories();
	}

	deleteCategory(id: string, position: number) {
		this.categoryService.deleteCategory(id)
		.then((result) => {
			this.categories.splice(position, 1)
		})
	}

	editCategory(category: Category) {
		this.router.navigate(['/admin/categories/edit/' + category.id], {state: {category: category}});
	}

}
