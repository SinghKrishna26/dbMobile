import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TransactionHistoryService } from '../transaction-history/transaction-history.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public thSubscription :Subscription | undefined;
  public accountsData:any;
  constructor(private router: Router, private thService: TransactionHistoryService) {}

  ngOnInit(){
    this.thSubscription=  this.thService.getAccounts().subscribe(res=>{
      this.accountsData=res['accounts'];
    })
  }

  navigate(){
    this.router.navigate(['/home/genie'])
  }

  details(ac: any){
    // let routeData: NavigationExtras = {
    //    accountNumber
    // }
    this.router.navigate(['/home/transaction-history'],{state:{accountNumber:ac.accountNumber}});
  }

}
