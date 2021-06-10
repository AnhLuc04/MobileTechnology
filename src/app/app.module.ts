import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { DetailPhoneComponent } from './modules/detail-phone/detail-phone.component';
import { CompanyPhoneComponent } from './modules/company-phone/company-phone.component';
import { DetailWebComponent } from './modules/detail-web/detail-web.component';
import { SlectionPhoneComponent } from './modules/slection-phone/slection-phone.component';
import { CartComponent } from './modules/cart/cart.component';
import { OrderedComponent } from './modules/ordered/ordered.component';
import { SeachPhoneComponent } from './modules/seach-phone/seach-phone.component';
import { PricePhoneComponent } from './modules/price-phone/price-phone.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { FooterComponent } from './modules/footer/footer.component';
import { CategoryComponent } from './modules/category/category.component';
import { CreatePhoneComponent } from './modules/create-phone/create-phone.component';
import { UpdatePhoneComponent } from './modules/update-phone/update-phone.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailPhoneComponent,
    CompanyPhoneComponent,
    DetailWebComponent,
    SlectionPhoneComponent,
    CartComponent,
    OrderedComponent,
    SeachPhoneComponent,
    PricePhoneComponent,
    FooterComponent,
    CategoryComponent,
    CreatePhoneComponent,
    UpdatePhoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
