import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from './components/stocks/stocks.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { ShowStockComponent } from './components/show-stock/show-stock.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'add',
    component: AddStockComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'stock/:code',
    component: ShowStockComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '',
    component: StocksComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
