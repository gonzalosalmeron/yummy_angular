import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/admin/login/login.component';
import { FormsModule } from '@angular/forms';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { BrowseComponent as CategoryBrowse } from './pages/admin/categories/browse/browse.component';
import { CreditComponent } from './pages/admin/categories/credit/credit.component';

import { BrowseComponent as RecipeBrowse } from './pages/admin/recipes/browse/browse.component';

import { CategoryService } from './shared/services/category.service';
import { CanvasComponent } from './shared/components/canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccordionComponent,
    DashboardComponent,
    LoginComponent,
    RecipeBrowse,
    CategoryBrowse,
    CreditComponent,
    BackButtonComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService, CategoryService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
