import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasComponent } from './forgot-pas.component';

describe('ForgotPasComponent', () => {
  let component: ForgotPasComponent;
  let fixture: ComponentFixture<ForgotPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
