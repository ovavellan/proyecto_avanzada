import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPendienteComponent } from './estado-pendiente.component';

describe('EstadoPendienteComponent', () => {
  let component: EstadoPendienteComponent;
  let fixture: ComponentFixture<EstadoPendienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoPendienteComponent]
    });
    fixture = TestBed.createComponent(EstadoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
