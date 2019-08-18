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
    {header: 'Soaring wyvern', subheader: 'Acrylic painting', price: 2500, quantity: 1, image: '/assets/images/Painting.png'},
    {header: 'Secret depths', subheader: 'Acrylic painting', price: 1500, quantity: 1, image: '/assets/images/Painting2.png'},
    {header: 'Spanish dancer', subheader: 'Acrylic painting', price: 1000, quantity: 1, image: '/assets/images/Painting3.png'},
  ];

  public itemsList2 = [
    {header: 'Reverse owl', subheader: 'Acrylic painting', price: 1500, quantity: 1, image: '/assets/images/Painting4.png'},
    {header: 'The lionfish', subheader: 'Polymer clay sculpture', price: 5000, quantity: 1, image: '/assets/images/Figure.png'},
    {header: 'Fenced planter', subheader: 'DIY plant pot', price: 1004, quantity: 1, image: '/assets/images/Plantpot.png'},
  ];

  ngOnInit() {
  }

  public addToBasket(item: {}) {
    this.basketService.addItem(item);
    this.basketEvent.emit();
  }
}
