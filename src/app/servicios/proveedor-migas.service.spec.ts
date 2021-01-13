import { TestBed } from '@angular/core/testing';

import { ProveedorMigasService } from './proveedor-migas.service';

describe('ProveedorMigasService', () => {
  let service: ProveedorMigasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorMigasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
