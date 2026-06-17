import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from "./catalog/catalog.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogComponent, CartComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'joes-robot-shop';
}
