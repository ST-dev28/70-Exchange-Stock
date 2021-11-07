import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/models/stock';
import { ActivatedRoute, Router } from '@angular/router';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss']
})
export class ShowStockComponent implements OnInit {
 public stock!: Stock;
  
 constructor(private stockService: StockService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.stockService.getStockInfo(this.route.snapshot.params['code']).subscribe((response: Stock[]) => {
    this.stock = response[0];
    console.log(this.stock);
    
    })
  }

public onSubmit() {
console.log(this.stock);
/*const stock: Stock = new Stock(
  addForm.value.name, 
  addForm.value.code,
  addForm.value.price,
  addForm.value.previousPrice,
  addForm.value.exchange,
  addForm.value.favorite
  );*/

this.stockService.patchStock(this.stock).subscribe((response) =>{
  console.log(response);
  this.router.navigate(["/"]);
},
(response) =>{
  console.log(("Error:" + response));
  
})
}
}
