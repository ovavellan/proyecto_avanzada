import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaConfirmadosComponent } from './tabla-confirmados.component';

describe('TablaConfirmadosComponent', () => {
  let component: TablaConfirmadosComponent;
  let fixture: ComponentFixture<TablaConfirmadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaConfirmadosComponent]
    });
    fixture = TestBed.createComponent(TablaConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
