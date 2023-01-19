import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '@eshop/products';

@Component({
  selector: 'eshop-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this._getFeaturedProducts();
  }

  private _getFeaturedProducts() {
    this.productsService.getFeaturedProducts(10).subscribe((products) => {
      this.products = products;
    });
  }
}
