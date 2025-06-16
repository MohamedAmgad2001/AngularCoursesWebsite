import { TestBed } from '@angular/core/testing';

import { AiServService } from './ai-serv.service';

describe('AiServService', () => {
  let service: AiServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AiServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
