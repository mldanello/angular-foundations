import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);
  
  
  getImageUrl(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  addToCart(event: MouseEvent): void {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100 );
    console.log(event);
  }
}
