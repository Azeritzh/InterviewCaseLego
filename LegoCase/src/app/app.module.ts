import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BasketPageComponent } from './basket-page/basket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    BasketPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
