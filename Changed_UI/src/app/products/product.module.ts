import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ReportsComponent } from './reports/reports.component'
import { ExpiredProductsComponent } from './expired-products/expired-products.component';
import { ReorderedProductsComponent } from './reordered-products/reordered-products.component';
import { ReportData } from '../reports-data';
@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    // InMemoryWebApiModule.forRoot(ReportData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'expired', component: ExpiredProductsComponent },
      { path: 'reordered', component: ReorderedProductsComponent },
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
