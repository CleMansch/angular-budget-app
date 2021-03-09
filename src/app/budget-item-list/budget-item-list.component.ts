import { Component, EventEmitter, Input, OnInit, Output, ValueProvider } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})




export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<any> = new EventEmitter <any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  //parent component listens to this event
onDeleteButtonClicked(item: BudgetItem){
this.delete.emit(item);
}

onCardClicked(item: BudgetItem){
//show the edit modal
const dialogRef = this.dialog.open(EditItemModalComponent, {
 width: '580',
 data:  item
});
dialogRef.afterClosed().subscribe(result => {
  //check is result got value
  if (result){
    this.update.emit({
    old: item,
      new: result
    })
  }
})
}
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}