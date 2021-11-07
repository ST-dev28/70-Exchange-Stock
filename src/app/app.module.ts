import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { FormsModule } from '@angular/forms';
import { ShowStockComponent } from './components/show-stock/show-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StocksComponent,
    AddStockComponent,
    ShowStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
