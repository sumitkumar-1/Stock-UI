import { Stocks } from './interface/stocks';
import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService } from './data.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Stocks';
  loading: boolean = true;
  stockData: Stocks[];
  profitStock: any;
  topStocksNumber: number = 5;

  constructor(private dataService: DataService) {
    this.stockData = [];
    this.profitStock = [];
  }

  ngOnInit(): void {
    this.dataService.getTopStocks(this.topStocksNumber).subscribe((data) => {
      this.profitStock = data;
    });
    this.dataService.getAllStocks().subscribe((data) => {
      this.stockData = <Stocks[]>data;
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }
}
