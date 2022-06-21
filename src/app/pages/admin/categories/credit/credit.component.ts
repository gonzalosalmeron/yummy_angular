import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../shared/services/category.service';
import { Category } from 'src/app/shared/interfaces/category';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

	name: string = ''
	id: string | null = null
	credit = 1
	creating: boolean = false
	error: string = ''


	constructor(private router: Router, private categoryService: CategoryService, private activedRoute: ActivatedRoute) { 
		this.activedRoute.paramMap.subscribe(params => { 
			this.id = params.get('id')

			if (this.id != null) {
				this.credit = 2

				var state = this.router.getCurrentNavigation()?.extras.state as { category: Category }
				var category = state.category
				this.id = category.id!
				this.name = category.name
			}
		});
	}

	ngOnInit(): void {
	}

	createCategory() {
		if (this.name.length < 3) {
			this.error = "Tiene que tener mínimo 2 carácteres"
		} else {
			this.creating = true
			let category: Category = { 'name': this.name }

			this.categoryService.createCategory(category)
			.then((result) => {
				this.creating = false
				this.router.navigateByUrl('/admin/categories')
			})
		}
	}

	editCategory() {
		let category: Category = { 'name': this.name }
		this.categoryService.editCategory(this.id!, category)
		.then((result) => {
			this.router.navigateByUrl('/admin/categories')
			Swal.fire({
				title: 'Correcto!',
				text: 'Categoria actualizada',
				icon: 'success',
				confirmButtonText: 'Confirmar'
			})
		})
		.catch((error) => {
			Swal.fire({
				title: 'Error!',
				text: 'No se ha podido editar la categoría',
				icon: 'error',
				confirmButtonText: 'Inténtalo más tarde'
			})
		});
	}

}
