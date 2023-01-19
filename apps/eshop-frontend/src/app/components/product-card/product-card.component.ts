import { Component, Input } from '@angular/core';
import { Product } from '@eshop/products';

@Component({
  selector: 'eshop-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;
}
