import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyFailedComponent } from './verify-failed.component';

describe('VerifyFailedComponent', () => {
  let component: VerifyFailedComponent;
  let fixture: ComponentFixture<VerifyFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyFailedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
