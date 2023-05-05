import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BpmeasurementAddEditComponent } from './bpmeasurement-add-edit/bpmeasurement-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webker-bpdiary';

  constructor(private  _dialog: MatDialog) {}

  openAddEditMesurement() {
    this._dialog.open(BpmeasurementAddEditComponent);
  }

}
