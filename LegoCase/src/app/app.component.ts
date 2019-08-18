import { Component, ViewChild } from '@angular/core';
import { ListingsPageComponent } from '../app/listings-page/listings-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LegoCase';
  public basketInfo = [
    {header: 'item1', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item2', subheader: 'This is a vase', price: 1002, quantity: 1},
    {header: 'item1', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item2', subheader: 'This is a vase', price: 1002, quantity: 1},
    {header: 'item1', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item2', subheader: 'This is a vase', price: 1002, quantity: 1},
    {header: 'item1', subheader: 'This is a vase', price: 1200, quantity: 1},
    {header: 'item2', subheader: 'This is a vase', price: 1002, quantity: 1},
  ];

  public openBasketPreview = true;

  recieveBasketInfo(items: []) {
    this.basketInfo = items;
    this.openBasketPreview = true;

    console.log(this.basketInfo)
  }
}
