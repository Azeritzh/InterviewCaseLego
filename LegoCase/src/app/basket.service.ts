import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  public items = [];

  public addItem(item) {
    this.items.push(item);
  }

  public removeItem(item) {
    const index = this.items.findIndex(e => e === item);
    this.items.splice(index, 1);
  }

  public calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}
