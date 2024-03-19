import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

}
export class ProductListComponent {
  @Input() products:Product[]=[];

  threshold:number=150;

  getStyle(product:Product){
    return {
      'background-color':product.available?'green':'red',
      'font-size':product.price>this.threshold?'20px':'10px'
    }
  }

}
export class Product {
  
  name: string;
  price: number;
  available: boolean;

  constructor(name: string, price: number, available: boolean) {
    this.name = name;
    this.price = price;
    this.available = available;
  }
}