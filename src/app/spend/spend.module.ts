import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpendPageRoutingModule } from './spend-routing.module';

import { SpendPage } from './spend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpendPageRoutingModule
  ],
  declarations: [SpendPage]
})
export class SpendPageModule {}
