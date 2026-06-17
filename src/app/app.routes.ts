import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: '', redirectTo: '/catalog', pathMatch: 'full'},
    {path: 'catalog', component: CatalogComponent},
    {path: 'cart', component: CartComponent},
];
