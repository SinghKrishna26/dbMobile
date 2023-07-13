import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TransactionHistoryService } from '../transaction-history/transaction-history.service';
import { HighchartsService } from './../high-charts.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // id:any;
  @ViewChild('charts') public chartEl: ElementRef | undefined;
  public accountsData:any;
  public thSubscription :Subscription | undefined;
  @ViewChild('notification') notification:ElementRef= {} as ElementRef;
  myOptions: any= {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Spend Analysis - June',
      align: 'center'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
  },
  legend: {
    enabled: true,
    //layout: 'horizontal',
    borderWidth: 0,
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Rent',
          y: 74.77,
          sliced: true,
          selected: true
      },  {
          name: 'Insurance',
          y: 12.82
      },  {
          name: 'Fuel',
          y: 4.63
      }, {
          name: 'Resources & Books',
          y: 2.44
      }, {
          name: 'Food',
          y: 2.02
      }, {
          name: 'Savings',
          y: 3.28
      }]
  }]
  }
  
  constructor(private navController: NavController,
    private router: Router, 
    private thService: TransactionHistoryService, 
    private highcharts:HighchartsService) {}
    
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

  ngAfterViewInit(){
    this.highcharts.createChart(this.chartEl?.nativeElement, this.myOptions);
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
