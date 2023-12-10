import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DummyService } from './dummy.service';

describe('DummyService', () => {
  let service: DummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DummyService);
  });

  it('Debería ser creado', () => {
    expect(service).toBeTruthy();
  });
});