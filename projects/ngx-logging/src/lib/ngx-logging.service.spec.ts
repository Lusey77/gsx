import { TestBed } from '@angular/core/testing';

import { NgxLoggingService } from './ngx-logging.service';

describe('NgxLoggingService', () => {
  let service: NgxLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
