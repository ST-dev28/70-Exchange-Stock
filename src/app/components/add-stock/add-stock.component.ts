import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
  }

public onSubmit(addForm: NgForm) {
console.log(addForm.value);
const stock: Stock = new Stock(
  addForm.value.name, 
  addForm.value.code,
  addForm.value.price,
  addForm.value.previousPrice,
  addForm.value.exchange,
  addForm.value.favorite == 1
  );

this.stockService.addStock(stock).subscribe((response) =>{
  console.log(response);
  this.router.navigate(["/"]);
})
}
}
