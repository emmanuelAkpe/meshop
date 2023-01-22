import { Component, Input } from '@angular/core';
import { CartItem, CartService } from '@eshop/orders';
import { Product } from '@eshop/products';

@Component({
  selector: 'eshop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1,
    };
    this.cartService.setCartItem(cartItem);
  }
}
