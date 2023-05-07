import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MeassurementServiceService } from 'src/app/shared/services/meassurement-service.service';
import { Meassure } from 'src/app/shared/models/Meassure';

@Component({
  selector: 'app-bpmeasurement-add-edit',
  templateUrl: './bpmeasurement-add-edit.component.html',
  styleUrls: ['./bpmeasurement-add-edit.component.scss']
})
export class BpmeasurementAddEditComponent {
  bpmForm!: FormGroup;

  constructor(private _fb: FormBuilder, private meassurementService: MeassurementServiceService) {}

  ngOnInit() {
    this.bpmForm = this._fb.group({
      date :'',
      potd: '',
      systol: '',
      diastol: '',
      pulse: '',
      comment: '',
    })
  }

  onFormSubmit() {
    if(this.bpmForm.valid) {
      const formData = this.bpmForm.value;
      const meassureData: Meassure = {
        date: formData.date.toISOString(),
        potd: formData.potd,
        systol: formData.systol,
        diastol: formData.diastol,
        pulse: formData.pulse,
        comment: formData.comment
      };
      this.meassurementService.create(meassureData);
    }
  }

  potd: string[] = [ // parts of the day
    'Reggel',
    'Dél',
    'Délután',
    'Este',
  ];
}
