import { Component, OnInit } from '@angular/core';
import {CardServiceService} from '../card-service.service';

export const OrderData = [
  
]

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardlit :any = [] ;
  

  constructor (private cardService :CardServiceService){}

  ngOnInit(): void {
    this.GetCardDetails();
  }
  GetCardDetails()
  {
this.cardlit = this.cardService.cardData();
console.warn(this.cardlit);
  }


}
