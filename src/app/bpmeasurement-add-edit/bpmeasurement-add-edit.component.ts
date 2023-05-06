import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bpmeasurement-add-edit',
  templateUrl: './bpmeasurement-add-edit.component.html',
  styleUrls: ['./bpmeasurement-add-edit.component.scss']
})
export class BpmeasurementAddEditComponent {
  bpmForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.bpmForm = this._fb.group({
      date: '',
      potd: '',
      systol: '',
      diastol: '',
      pulse: '',
      comment: '',
    })
  }

onFormSubmit() {
  if(this.bpmForm.valid) {
    console.log(this.bpmForm.value);
  }
}


  potd: string[] = [ // parts of the day
    'Reggel',
    'Dél',
    'Délután',
    'Este',
  ];
}
