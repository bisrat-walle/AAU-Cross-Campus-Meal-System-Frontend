import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScheduleComponent } from './add-edit-schedule.component';

describe('AddEditScheduleComponent', () => {
  let component: AddEditScheduleComponent;
  let fixture: ComponentFixture<AddEditScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditScheduleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
