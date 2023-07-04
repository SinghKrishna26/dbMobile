import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeniePage } from './genie.page';

const routes: Routes = [
  {
    path: '',
    component: GeniePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeniePageRoutingModule {}
