import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
// import  {} from './../../assets/mock/transaction-history-mock.json'

@Injectable({
  providedIn: 'root',
})
export class TransactionHistoryService {

  constructor(private http: HttpClient) { }

  getTransactionHistoryList(): Observable<any>{
    return this.http.get('./../../assets/mock/transaction-history-mock.json');
  }

}

