import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../interfaces/category';
import Swal from 'sweetalert2'


@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	constructor(private db: AngularFireDatabase, private firebase: AngularFirestore) {}

	getAllCategories() {
		return new Promise<any>((resolve)=> {
			this.firebase.collection('categories').valueChanges({ idField: 'id' }).subscribe(categories => resolve(categories));
		});
	}

	async createCategory(category: Category){
		await this.firebase.collection('categories').add(category)
	}

	async editCategory(id:string, category: Category){
		await this.firebase.collection('categories').doc(id).set(category)
	}

	async deleteCategory(id: string) {
		await this.firebase.collection('categories').doc(id).delete()
		.then((result) => {
			Swal.fire({
				title: 'Correcto!',
				text: 'Categoria eliminada correctamente',
				icon: 'success',
				confirmButtonText: 'Confirmar'
			})
		})
		.catch((error) => {
			Swal.fire({
			title: 'Error!',
			text: 'No se ha podido eliminar la categoría',
			icon: 'error',
			confirmButtonText: 'Inténtalo más tarde'
			})
		});
		
	}
}
