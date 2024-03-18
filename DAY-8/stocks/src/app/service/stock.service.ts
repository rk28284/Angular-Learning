import { Injectable } from '@angular/core';
import axios from 'axios';
export interface Stock {
  symbol: string;
  ltp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  pctChange: number;
  openHighLowSignal: string;
  stockOutperformanceRank: number;
  stockMomentumRank: number;
}
@Injectable({
  providedIn: 'root'
})
export class StockService {

  async getStocks() {
    const response = await axios.get('https://intradayscreener.com/api/openhighlow/cash');
    return response.data;

  }
  constructor() { }
}
