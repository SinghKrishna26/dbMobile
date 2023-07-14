import { Component, OnInit } from '@angular/core';
import { TransactionHistoryService } from '../transaction-history/transaction-history.service';

@Component({
  selector: 'app-spend',
  templateUrl: './spend.page.html',
  styleUrls: ['./spend.page.scss'],
})
export class SpendPage implements OnInit {
  isMessage:boolean = false;
  amount: any = '';
  date:any = "2023-07-14";
  balance:any = 60000;
  fdAmount: any;

  constructor(private thService: TransactionHistoryService) { }

  ngOnInit() {
  }

  calculate() {
    console.log("date---->",this.date);
    this.date = this.formatDate(new Date(this.date));
    const postData = {
      "dates": [this.date]
  }
    this.thService.getPrediction(postData).subscribe(res=>{
      this.amount = Object.values(res)[0];
      this.calculateFdAmount();
      
      // console.log("------------->",Object.values(res))
      // console.log("balance-->",this.balance);
      // console.log(this.formatDate(new Date(this.date)))
      this.balance = ""
      
    })
  }

  padTo2Digits(num:any) {
    return num.toString().padStart(2, '0');
  }
  formatDate(date:any) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-');
  }

  calculateFdAmount() {
    console.log(this.balance);
    console.log(this.amount);
    this.fdAmount = this.balance - this.amount;
    console.log(this.fdAmount);
  }

}
