import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySucessComponent } from './verify-sucess.component';

describe('VerifySucessComponent', () => {
  let component: VerifySucessComponent;
  let fixture: ComponentFixture<VerifySucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifySucessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
