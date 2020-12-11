import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { NavbarComponent } from './Authentication/navbar.component';
import { LAdminComponent } from './Authentication/l-admin.component';
import { LUserComponent } from './Authentication/l-user.component';
import { AboutComponent} from './Authentication/about.component';
import { UserhomeComponent } from './Authentication/userhome.component';
import { ContactComponent } from './Authentication/contact.component';
import { SignupComponent } from './Authentication/signup.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { AddprocurementComponent } from './addprocurement/addprocurement.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LAdminComponent,
    LUserComponent,
    AboutComponent,
    UserhomeComponent,
    ContactComponent,
    BillComponent,
    SignupComponent,
    ProcurementComponent,
    AddprocurementComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent },
      {path:'procurement', component: ProcurementComponent },
      {path: 'welcome', redirectTo: 'welcome', pathMatch: 'full' },
      {path: 'ladmin' , component: LAdminComponent},
      {path: 'addprocurement' , component: AddprocurementComponent},
      {path:'', component:LUserComponent},
      {path:'about', component:AboutComponent},
      {path:'employee', component:BillComponent}, 
      {path:'userhome', component:UserhomeComponent},
      {path:'signup', component:SignupComponent}
    ]),
    ProductModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
