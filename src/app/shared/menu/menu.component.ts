import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BpmeasurementAddEditComponent } from 'src/app/pages/bpmeasurement-add-edit/bpmeasurement-add-edit.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  title = 'webker-bpdiary';

  @Input() currentPage: string = '';
  @Output() selectedPage : EventEmitter<string> = new EventEmitter;


  constructor(private  _dialog: MatDialog) {}

  openAddEditMesurement() {
    this._dialog.open(BpmeasurementAddEditComponent);
  }

  menuSwitch() {
      this.selectedPage.emit(this.currentPage);
  }
}
