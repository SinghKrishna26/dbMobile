import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
// import  {} from './../../assets/mock/transaction-history-mock.json'

@Injectable({
  providedIn: 'root',
})
export class TransactionHistoryService {

  constructor(private http: HttpClient) { }

  getTransactionHistoryList(): Observable<any>{
    return this.http.get('./../../assets/mock/transaction-history-mock.json')

  }

  getAccounts():Observable<any>{
    return this.http.get('./../../assets/mock/accounts-mock.json');
  }

  getPrediction(): Observable<any>{
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });

    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    const postData = {
        "dates": ["01-10-2020"]
    }
  
  return this.http.post("https://spendpatternapp-444qxfbmrq-uc.a.run.app/predictJson", postData, httpHeader)
  // .subscribe(data => {
  // console.log(data);
  // }, error => {
  // console.log(error);
  // });
  }

}

