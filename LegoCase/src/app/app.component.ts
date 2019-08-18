import { Component } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public basketInfo = [];
  public basketTotalAmount = 0;

  constructor(public basketService: BasketService) {
    this.basketInfo = basketService.items;
    this.basketTotalAmount = basketService.calculateTotal();
  }

  public openBasketPreview = false;

  public recieveBasketInfo() {
    this.openBasketPreview = true;
    this.basketTotalAmount = this.basketService.calculateTotal();
  }

  public closePreviewBasket() {
    this.openBasketPreview = false;
  }

  public removeFromBasket(item) {
    this.basketService.removeItem(item);
    this.basketTotalAmount = this.basketService.calculateTotal();
  }
}
