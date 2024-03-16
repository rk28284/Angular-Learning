import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

{path:"home",component:HomeComponentComponent},
{path:"about",component:AboutComponentComponent},
{path:"product",component:ProductsComponentComponent},

{path:"**",component:PageNotFoundComponent}
];
