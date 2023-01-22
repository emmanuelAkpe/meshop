import { Component } from '@angular/core';
import { CartService } from '@eshop/orders';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'eshop-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
})
export class ToastMessageComponent {
  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.toastr.success('Hello world!', 'Toastr fun!');
    });
  }
}
