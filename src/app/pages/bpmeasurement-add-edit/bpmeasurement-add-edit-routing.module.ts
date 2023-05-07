import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpmeasurementAddEditComponent } from './bpmeasurement-add-edit.component';

const routes: Routes = [
  { path: '', component: BpmeasurementAddEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpmeasurementAddEditRoutingModule { }
