import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  @Output() basketEvent = new EventEmitter();

  constructor(public basketService: BasketService) { }

  public itemsList1 = [
    {header: 'item1', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item2', subheader: 'This is a vase', price: 1002, quantity: 1},
    {header: 'item3', subheader: 'This is a vase', price: 1004, quantity: 1},
  ];

  public itemsList2 = [
    {header: 'item4', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item5', subheader: 'This is a vase', price: 1002, quantity: 1},
    {header: 'item6', subheader: 'This is a vase', price: 1004, quantity: 1},
  ];

  ngOnInit() {
  }

  public addToBasket(item: {}) {
    this.basketService.addItem(item);
    this.basketEvent.emit();
  }
}
