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
  },
  {
    path: 'genie',
    loadChildren: () => import('../genie/genie.module').then(m => m.GeniePageModule)
  }
  // {
  //   path: 'anomaly',
  //   loadChildren: () => import('../anomaly/anomaly.module').then(m => m.AnomalyModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
