import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  constructor() { }

  public itemsList1 = [
    {header: 'item1', subheader: 'This is a vase', price: 1200},
    {header: 'item2', subheader: 'This is a vase', price: 1002},
    {header: 'item3', subheader: 'This is a vase', price: 1004},
  ];

  public itemsList2 = [
    {header: 'item4', subheader: 'This is a vase', price: 1200},
    {header: 'item5', subheader: 'This is a vase', price: 1002},
    {header: 'item6', subheader: 'This is a vase', price: 1004},
  ];

  ngOnInit() {
  }
}
