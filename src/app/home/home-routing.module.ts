import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TransactionHistoryPage } from '../transaction-history/transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'transaction-history',
    component: TransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
