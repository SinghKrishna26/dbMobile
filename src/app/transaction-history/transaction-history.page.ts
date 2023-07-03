import { Component, OnDestroy } from '@angular/core';

import { Observable, Subscribable, Subscription } from 'rxjs';
import { TransactionHistoryService } from './transaction-history.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: 'transaction-history.page.html',
  styleUrls: ['transaction-history.page.scss']
})
export class TransactionHistoryPage  implements OnDestroy{

   public thSubscription :Subscription | undefined;
   public transactionData:any;
  constructor(private thService: TransactionHistoryService) {}

  ngOnInit(){
  this.thSubscription=  this.thService.getTransactionHistoryList().subscribe(res=>{
      this.transactionData=res['transactionList'];
    })
  }

  ngOnDestroy(): void {
    this.thSubscription?.unsubscribe();
  }
}
