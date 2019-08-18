import { Component } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public basketInfo = [];
  public get basketTotalAmount() {
    return this.basketService.totalCost;
  }
  public get basketTotalQuantity() {
    return this.basketService.totalQuantity;
  }
  public showBasketPage = false;

  constructor(public basketService: BasketService) {
    this.basketInfo = basketService.items;
  }

  public openBasketPreview = false;

  public recieveBasketInfo() {
    this.showBasketPreview();
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
  }

  public changeToBasketPage() {
    this.closePreviewBasket();
    this.showBasketPage = true;
  }
}
