import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@eshop/ui';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { FooterAdsComponent } from './shared/footer-ads/footer-ads.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { OrdersModule } from '@eshop/orders';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { ToastrModule } from 'ngx-toastr';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckkoutPageComponent } from './pages/checkkout-page/checkkout-page.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
const Nx = [];
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productid', component: ProductDetailComponent },
  { path: 'category/:categoryid', component: ProductListComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckkoutPageComponent },
  { path: 'success', component: ThankYouComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CategoryComponent,
    FooterAdsComponent,
    FeaturedProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductGalleryComponent,
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckkoutPageComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
    FormsModule,
    UiModule,
    OrdersModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    ...Nx,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
