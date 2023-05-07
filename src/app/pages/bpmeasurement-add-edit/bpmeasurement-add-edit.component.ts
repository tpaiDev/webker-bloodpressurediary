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
    if(this.meassurementService.modify) {
      this.bpmForm = this._fb.group({
        date : this.meassurementService.meassurementModify.date,
        potd: this.meassurementService.meassurementModify.potd,
        systol: this.meassurementService.meassurementModify.systol,
        diastol: this.meassurementService.meassurementModify.diastol,
        pulse: this.meassurementService.meassurementModify.pulse,
        comment: this.meassurementService.meassurementModify.comment,
      })
    }else{
      this.bpmForm = this._fb.group({
        date :'',
        potd: '',
        systol: '',
        diastol: '',
        pulse: '',
        comment: '',
      })
    }
  }

  onFormSubmit() {
    if(this.bpmForm.valid) {
      const formData = this.bpmForm.value;
      let dateObj: Date;
      if (typeof formData.date === 'string') {
        dateObj = new Date(formData.date);
      } else {
        dateObj = formData.date;
      }
      const measureData: Meassure = {
        date: dateObj.toISOString(),
        potd: formData.potd,
        systol: formData.systol,
        diastol: formData.diastol,
        pulse: formData.pulse,
        comment: formData.comment
      };
      if(this.meassurementService.modify) {
        measureData.date = formData.date;
        measureData.id = this.meassurementService.meassurementModify.id;
        this.meassurementService.update(measureData);
      } else {
        this.meassurementService.create(measureData);
      }
    }
  }
  

  potd: string[] = [ // parts of the day
    'Reggel',
    'Dél',
    'Délután',
    'Este',
  ];
}
