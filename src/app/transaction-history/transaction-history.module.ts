import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionHistoryPage } from './transaction-history.page';
import { TransactionHistoryPageRoutingModule } from './transaction-history-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TransactionHistoryPageRoutingModule
  ],
  declarations: [TransactionHistoryPage]
})
export class TransactionHistoryPageModule {}
