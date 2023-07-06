import { Component, OnDestroy } from '@angular/core';

import { Observable, Subscribable, Subscription } from 'rxjs';
import { TransactionHistoryService } from './transaction-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: 'transaction-history.page.html',
  styleUrls: ['transaction-history.page.scss']
})
export class TransactionHistoryPage  implements OnDestroy{

   public thSubscription :Subscription | undefined;
   public transactionData:any;
   public accountNumber:any;
  constructor(private thService: TransactionHistoryService, private router: Router) {
   this.accountNumber= this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(){
  this.thSubscription=  this.thService.getTransactionHistoryList().subscribe(res=>{
      this.transactionData=res['transactionList'];
    })
  }

  ngOnDestroy(): void {
    this.thSubscription?.unsubscribe();
  }
}
