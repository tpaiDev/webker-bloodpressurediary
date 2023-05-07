import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BpmeasurementAddEditComponent } from 'src/app/pages/bpmeasurement-add-edit/bpmeasurement-add-edit.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor(private  _dialog: MatDialog) {}

  openAddEditMesurement() {
    this._dialog.open(BpmeasurementAddEditComponent);
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean) {
    this.onCloseSidenav.emit(true);
    if (logout === true) {
      this.onLogout.emit(logout);
    }
  }
}