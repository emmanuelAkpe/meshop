import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@eshop/products';
import { MessageService, ConfirmationService } from 'primeng/api';
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
  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this._getCategories();
  }

  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Category?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoryId).subscribe(
          () => {
            this._getCategories();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Category is deleted!',
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Category is not deleted!',
            });
          }
        );
      },
    });
  }
  updateCategory(categoryId: string) {
    this.router.navigateByUrl(`categories/form/${categoryId}`);
  }

  private _getCategories() {
    this.categoriesService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
