import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {CardServiceService} from '../card-service.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent {

  
 
cardlit :any = [] ;
  

  constructor (private cardService :CardServiceService){}

  list1 = ['', '', ''];
  list2 = [''];
  list3 = ['', ''];
  list4 = ['', ''];
  ngOnInit(): void {
    this.GetCardDetails();
  }

  GetCardDetails()
  {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(this.list1, event.previousIndex, event.currentIndex);
    }
  }
}
