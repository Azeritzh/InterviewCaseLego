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
  public showBasketPage = false;

  constructor(public basketService: BasketService) {
    this.basketInfo = basketService.items;
    this.basketTotalAmount = basketService.calculateTotal();
  }

  public openBasketPreview = false;

  public recieveBasketInfo() {
    this.showBasketPreview();
    this.basketTotalAmount = this.basketService.calculateTotal();
  }

  public showBasketPreview() {
    this.openBasketPreview = true;
  }

  public returnToListings() {
    this.showBasketPage = false;
  }

  public closePreviewBasket() {
    this.openBasketPreview = false;
  }

  public removeFromBasket(item) {
    this.basketService.removeItem(item);
    this.basketTotalAmount = this.basketService.calculateTotal();
  }

  public changeToBasketPage() {
    this.closePreviewBasket();
    this.showBasketPage = true;
  }
}
