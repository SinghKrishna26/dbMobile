import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

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
   isModalOpen = false;
   modalTouched:boolean | undefined;

  constructor(private thService: TransactionHistoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(){
    console.log("this.router",this.route.queryParams);
    this.route.queryParams.subscribe(param => {
      this.navParam = param;
    })
  this.thSubscription=  this.thService.getTransactionHistoryList().subscribe(res=>{
      this.transactionData=res['transactionList'];
    })
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  confirmTrn(trn:any,status:string){
   
   if(status==='1'){
    this.isModalOpen=false;
    trn.suspiciousFlag=false;
   }
   else if (status==='0'){
    this.isModalOpen=false;
    this.modalTouched=true;
   }
  }

  ngOnDestroy(): void {
    this.thSubscription?.unsubscribe();
  }
}
