import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentFailComponent } from './payment/payment-fail/payment-fail.component';
import { ProductService } from "./shared/services/product.service";
import { PaymentSuccessComponent } from './payment/payment-success/payment-success.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentFailComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'fail', component: PaymentFailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,
    CheckoutComponent,
    ContactComponent,
    PaymentFailComponent,
    PaymentSuccessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule { }
