import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2'
import { Recipe } from '../interfaces/recipe';


@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	constructor(private db: AngularFireDatabase, private firebase: AngularFirestore) {}

	getAllRecipes() {
		return new Promise<any>((resolve)=> {
			this.firebase.collection('recipes').valueChanges({ idField: 'id' }).subscribe(recipes => resolve(recipes));
		});
	}

  async deleteRecipe(id: string) {
		await this.firebase.collection('recipes').doc(id).delete()
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
