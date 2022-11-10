import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CompanyComponent } from './company/company.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [CompanyComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
