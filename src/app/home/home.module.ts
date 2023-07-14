import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TransactionHistoryPageModule } from '../transaction-history/transaction-history.module';
import { HighchartsService } from '../high-charts.service';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    TransactionHistoryPageModule
  ],
  declarations: [HomePage],
  providers:[HighchartsService]
})
export class HomePageModule {}
