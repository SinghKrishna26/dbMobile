import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TransactionHistoryService } from '../transaction-history/transaction-history.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // id:any;
  public accountsData:any;
  public thSubscription :Subscription | undefined;
  @ViewChild('notification') notification:ElementRef= {} as ElementRef;

  constructor(private navController: NavController,private router: Router, private thService: TransactionHistoryService) {}

  navigate(route:string){
    switch(route){
      case 'home':
      this.router.navigate(['/home'])
      break;

      case 'genie':
        this.router.navigate(['/home/genie'])
      break;

      case 'login':
        this.router.navigate([''])
        break;

      default:
        this.router.navigate([''])
    }
    // this.router.navigate(['/home/genie'])
  }

  details(account:any){
    console.log("account",account)
    this.router.navigate(['/home/transaction-history'],{queryParams:account})
  }

  ngOnInit(){
    this.thSubscription=  this.thService.getAccounts().subscribe(res=>{
      console.log("res",res);
      this.accountsData=res['accounts'];
    })
  }

  // ngOnInit() {
  //   this.id = setTimeout(() => {
  //     this.notification.nativeElement.stop().slideToggle('slow');
  //   }, 5000);
  // }

  // ngOnDestroy() {
  //   if (this.id) {
  //     clearInterval(this.id);
  //   }
  // }
}
