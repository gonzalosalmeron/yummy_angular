import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/admin/login/login.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { BrowseComponent as CategoriesBrowseComponent } from './pages/admin/categories/browse/browse.component';
import { CreditComponent as CategoriesCreditComponent } from './pages/admin/categories/credit/credit.component';
import { BrowseComponent as RecipesBrowseComponent } from './pages/admin/recipes/browse/browse.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', pathMatch: 'full', redirectTo: '/admin/dashboard' },
    { path: 'admin/login', component: LoginComponent },
    { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'admin/categories', component: CategoriesBrowseComponent, canActivate: [AuthGuard] },
    { path: 'admin/categories/create', component: CategoriesCreditComponent, canActivate: [AuthGuard] },
    { path: 'admin/categories/edit/:id', component: CategoriesCreditComponent, canActivate: [AuthGuard] },
    { path: 'admin/recipes', component: RecipesBrowseComponent, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
