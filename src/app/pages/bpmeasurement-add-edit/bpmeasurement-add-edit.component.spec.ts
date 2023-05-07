import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmeasurementAddEditComponent } from './bpmeasurement-add-edit.component';

describe('BpmeasurementAddEditComponent', () => {
  let component: BpmeasurementAddEditComponent;
  let fixture: ComponentFixture<BpmeasurementAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmeasurementAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmeasurementAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
