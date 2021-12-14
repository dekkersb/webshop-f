import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductItemComponent,
    CheckoutComponent,
    HomeComponent,
    ContactComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
