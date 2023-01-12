import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@eshop/products';

@Component({
  selector: 'eshop-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  // categories = [
  //   {
  //     id: 1,
  //     name: 'category-1',
  //     icon: 'icon-1',
  //   },
  //   {
  //     id: 2,
  //     name: 'category-2',
  //     icon: 'icon-2',
  //   },
  //   {
  //     id: 3,
  //     name: 'category-3',
  //     icon: 'icon-3',
  //   },
  // ];
  categories: Category[] = [];
  constructor(private categoriesService: CategoriesService) {}
  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
