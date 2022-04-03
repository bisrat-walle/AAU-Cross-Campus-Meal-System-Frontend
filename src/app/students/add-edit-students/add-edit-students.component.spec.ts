import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentsComponent } from './add-edit-students.component';

describe('AddEditStudentsComponent', () => {
  let component: AddEditStudentsComponent;
  let fixture: ComponentFixture<AddEditStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
