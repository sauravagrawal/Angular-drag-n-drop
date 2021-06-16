import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCardComponent } from './order-card/order-card.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CardServiceService } from '../app/card-service.service';
import { TotalDueComponent } from './total-due/total-due.component';
import { FiterSearchBarComponent } from './fiter-search-bar/fiter-search-bar.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderCardComponent,
    TotalDueComponent,
    FiterSearchBarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
