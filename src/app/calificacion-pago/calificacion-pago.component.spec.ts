import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionPagoComponent } from './calificacion-pago.component';

describe('CalificacionPagoComponent', () => {
  let component: CalificacionPagoComponent;
  let fixture: ComponentFixture<CalificacionPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificacionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
