import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  public items = [];

  public addItem(item) {
    const itemExists = this.items.findIndex(e => e.header === item.header) >= 0;
    if (itemExists) {
      item.quantity++;
    } else {
      this.items.push(item);
    }
  }

  public removeItem(item) {
    const index = this.items.findIndex(e => e.header === item.header);
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
