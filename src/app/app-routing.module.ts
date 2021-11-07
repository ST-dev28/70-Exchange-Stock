import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from './components/stocks/stocks.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { ShowStockComponent } from './components/show-stock/show-stock.component';

const routes: Routes = [

  {
    path: '',
    component: StocksComponent
  },
  {
    path: 'add',
    component: AddStockComponent
  },
  {
    path: 'stock/:code',
    component: ShowStockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
