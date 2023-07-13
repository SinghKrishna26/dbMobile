import { Component, OnDestroy } from '@angular/core';

import { Observable, Subscribable, Subscription } from 'rxjs';
import { TransactionHistoryService } from './transaction-history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: 'transaction-history.page.html',
  styleUrls: ['transaction-history.page.scss']
})
export class TransactionHistoryPage  implements OnDestroy{

   public thSubscription :Subscription | undefined;
   public transactionData:any;
   public navParam:any;
  constructor(private thService: TransactionHistoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    console.log("this.router",this.route.queryParams);
    this.route.queryParams.subscribe(param => {
      this.navParam = param;
    })
  this.thSubscription=  this.thService.getTransactionHistoryList().subscribe(res=>{
      this.transactionData=res['transactionList'];
    })

    this.thService.getPrediction().subscribe(res=>{
      console.log("------------->",res)
    })
  }

  ngOnDestroy(): void {
    this.thSubscription?.unsubscribe();
  }
}
