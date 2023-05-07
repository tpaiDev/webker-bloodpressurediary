import { Component, OnInit } from '@angular/core';
import { MeassurementServiceService } from '../../shared/services/meassurement-service.service';
import { Meassure } from '../../shared/models/Meassure';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  displayedColumns: string[] = ['date', 'potd', 'systol', 'diastol', 'pulse', 'comment'];
  dataSource = new MatTableDataSource<Meassure>();

  constructor(private measureService: MeassurementServiceService) { }

  ngOnInit(): void {
    this.measureService.getAll().subscribe(measurements => {
      this.dataSource.data = measurements;
    });
  }
}
