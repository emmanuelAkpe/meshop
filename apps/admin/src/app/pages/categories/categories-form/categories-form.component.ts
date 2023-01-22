import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@eshop/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eshop-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  editmode = false;
  imageDisplay: string | ArrayBuffer;
  currentCategoryId: string;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._checkEditMode();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      color: ['#fff'],
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const categoryFormData = new FormData();
    Object.keys(this.categoryForm).map((key) => {
      categoryFormData.append(key, this.categoryForm[key].value);
    });

    if (this.editmode) {
      this._updateCategory(categoryFormData);
    } else {
      this._addCategory(categoryFormData);
    }
  }

  Cancel() {
    this.location.back();
  }

  private _addCategory(categoryData: FormData) {
    this.categoriesService.createCategory(categoryData).subscribe(
      (category: Category) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Category ${category.name} is created!`,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Category is not created!',
        });
      }
    );
  }

  private _updateCategory(categoryFormData: FormData) {
    this.categoriesService
      .updateCategory(categoryFormData, this.currentCategoryId)
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Category is updated!',
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Category is not updated!',
          });
        }
      );
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.editmode = true;
        this.currentCategoryId = params.id;
        this.categoriesService.getCategory(params.id).subscribe((category) => {
          this.categoryForm.name.setValue(category.name);
          this.categoryForm.color.setValue(category.color);
          this.imageDisplay = category.image;
          this.categoryForm.image.setValidators([]);
          this.categoryForm.image.updateValueAndValidity();
        });
      }
    });
  }

  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  get categoryForm() {
    return this.form.controls;
  }
}
