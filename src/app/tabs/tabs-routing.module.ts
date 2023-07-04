import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../home/home.module').then(m => m.Tab1PageModule)
      // },
      {
        path: 'tab2',
        loadChildren: () => import('../transaction-history/transaction-history.module').then(m => m.TransactionHistoryPageModule)
      },
      {
        path: 'genie',
        loadChildren: () => import('../genie/genie.module').then(m => m.GeniePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
