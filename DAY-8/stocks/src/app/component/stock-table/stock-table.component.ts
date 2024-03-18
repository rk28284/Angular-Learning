import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock, StockService } from '../../service/stock.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-stock-table',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule,MatTableModule,MatSortModule, MatPaginatorModule,MatIconModule],
  templateUrl: './stock-table.component.html',

  styleUrl: './stock-table.component.css'
})
export class StockTableComponent implements OnInit {
   stocks: Stock[] = [];
   stocksDataSource = new MatTableDataSource<Stock>(this.stocks);

  displayedColumns: string[] = ['symbol', 'ltp', 'momentum', 'open', 'deviationFromPivots', 'todaysRange', 'ohl'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private stockService: StockService) {}

  async ngOnInit() {
    this.stocks = await this.stockService.getStocks();
    this.stocksDataSource.data = this.stocks;
    console.log(this.stocks);
    

  }

  ngAfterViewInit() {
    this.stocksDataSource.paginator = this.paginator;
    this.stocksDataSource.sort = this.sort;
  }

  
  getIcon(symbol: string): string {
    return symbol.charAt(0);
  }


  
}
