import { Component, Input } from '@angular/core';

@Component({
  selector: 'eshop-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent {
  selectedImage: string;

  @Input() images: string[];
}
