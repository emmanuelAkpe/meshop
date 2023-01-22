import { Component, OnInit } from '@angular/core';
import {
  CartItem,
  CartItemDetailed,
  CartService,
  OrdersService,
} from '@eshop/orders';

@Component({
  selector: 'eshop-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService
  ) {}
  ngOnInit(): void {
    this._getCartDetails();
  }

  _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((resCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = resCart?.items.length ?? 0;
      resCart.items.forEach((cartItem) => {
        this.ordersService
          .getProduct(cartItem.productId)
          .subscribe((resproducts) => {
            this.cartItemsDetailed.push({
              product: resproducts,
              quantity: cartItem.quantity,
            });
          });
      });
    });
  }
  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event, cartItem: CartItemDetailed) {
    this.cartService.setCartItem(
      {
        productId: cartItem.product.id,
        quantity: event.value,
      },
      true
    );
  }
}
