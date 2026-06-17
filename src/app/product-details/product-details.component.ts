import { Component, signal, input } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../cart.service';


@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(3);

  constructor(private cartService: CartService) {
  }
  
  
  getImageUrl(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  getPriceClasses() {
    return {
      'strikethrough': this.product().discount > 0
    };
  }

  addToCart(event: MouseEvent): void {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100 );
    this.cartService.addToCart(this.product());
    console.log(event);
  }
}
