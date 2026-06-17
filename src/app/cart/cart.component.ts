import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { IProduct } from '../product.model';
import allProducts from '../products.json';

@Component({
  selector: 'bot-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: IProduct[] = [allProducts[2], allProducts[4]];
}
