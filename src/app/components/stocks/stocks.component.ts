import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  public stocks: Stock[]=[];

  constructor(private stockService: StockService) { }


  // metodas vykdomas, kada uzsikrauna komponentas
  ngOnInit(): void {
    this.stockService.getStocks().subscribe((response: Stock[]) => {
      this.stocks = response;
      //console.log(response);
    })

  }
}
