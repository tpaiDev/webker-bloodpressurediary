import { Component, OnInit } from '@angular/core';
import { MeassurementServiceService } from '../../shared/services/meassurement-service.service';
import { Meassure } from '../../shared/models/Meassure';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BpmeasurementAddEditComponent } from '../bpmeasurement-add-edit/bpmeasurement-add-edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  displayedColumns: string[] = ['date', 'potd', 'systol', 'diastol', 'pulse', 'comment', 'delete'];

  dataSource = new MatTableDataSource<Meassure>();

  constructor(private measureService: MeassurementServiceService, private  _dialog: MatDialog) { }

  ngOnInit(): void {
    this.measureService.getAll().subscribe(measurements => {
      this.dataSource.data = measurements;
    });
  }

  updateMeasure(measure: Meassure) {
    this.measureService.modify = true;
    this.measureService.meassurementModify = {...measure};
    this._dialog.open(BpmeasurementAddEditComponent);
  }

  deleteMeasure(measure: Meassure) {
    console.log('Deleting measure:', measure);
    this.measureService.delete(measure);
  }
}
