import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchitemPipe } from '../pile/searchitem.pipe';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,SearchitemPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Smartphone', price: 800, available: true },
    { name: 'Headphones', price: 100, available: false },
    { name: 'Camera', price: 600, available: true },
    { name: 'Tablet', price: 300, available: false },
    { name: 'Fitness Tracker', price: 50, available: true },
    { name: 'Bluetooth Speaker', price: 80, available: true },
    { name: 'Gaming Console', price: 400, available: false },
    { name: 'Smartwatch', price: 150, available: true },
    { name: 'External Hard Drive', price: 120, available: true },
  ];
  searchText :any
}
