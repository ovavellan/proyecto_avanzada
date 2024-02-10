import { TestBed } from '@angular/core/testing';

import { CarwashService } from './carwash.service';

describe('CarwashService', () => {
  let service: CarwashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarwashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
