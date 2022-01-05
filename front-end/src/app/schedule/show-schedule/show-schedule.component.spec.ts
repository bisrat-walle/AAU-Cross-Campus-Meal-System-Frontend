import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduleComponent } from './show-schedule.component';

describe('ShowScheduleComponent', () => {
  let component: ShowScheduleComponent;
  let fixture: ComponentFixture<ShowScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
