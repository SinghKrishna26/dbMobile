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
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 
    const postData={
      userName: "test"
    }
    // return this.http.get('./../../assets/mock/accounts-mock.json');
    return this.http.post('https://backendapi-444qxfbmrq-uc.a.run.app/accountsList', postData, httpHeader);
  }

  getPrediction(postData:any): Observable<any>{
    const httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }; 
  return this.http.post("https://spendpatternapp-444qxfbmrq-uc.a.run.app/predictJson", postData, httpHeader)
  }

}

