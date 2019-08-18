import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.css']
})
export class BasketPageComponent implements OnInit {
  @Output() returnEvent = new EventEmitter();
  public basketItems = [];

  constructor(public basketService: BasketService) {
    this.basketItems = basketService.items;
  }

  ngOnInit() {
  }

  updateQuantity(item, event) {
    item.quantity = +event.target.value;
  }

  returnToListings() {
    this.returnEvent.emit();
  }
}
