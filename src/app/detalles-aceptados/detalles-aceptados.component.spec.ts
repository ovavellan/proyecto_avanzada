import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAceptadosComponent } from './detalles-aceptados.component';

describe('DetallesAceptadosComponent', () => {
  let component: DetallesAceptadosComponent;
  let fixture: ComponentFixture<DetallesAceptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAceptadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
