import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {


  @Input() item: BudgetItem;
  //use void or any; bound to Event, for that any, since it can only be that one
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClick: EventEmitter<void>= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onXButtonClick(){
    //emit event
    this.xButtonClick.emit();
  }

  onCardClick(){
this.cardClick.emit();
  }
}
