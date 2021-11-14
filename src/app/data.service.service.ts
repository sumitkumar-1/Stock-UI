import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stocks } from './interface/stocks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl : string = "http://localhost:8010";

  constructor(private http: HttpClient) { }

  getAllStocks() {
    return this.http.get(this.baseUrl + '/Stock/api/v1/allStocks/');
  }

  getTopStocks(records: number){
    return this.http.get(this.baseUrl + '/Stock/api/v1/topStocks/' + records);
  }

  getStocksBySymbol(symbol: string) {
    return this.http.get(this.baseUrl + '/Stock/api/v1/allStocks/' + symbol);
  }
}
