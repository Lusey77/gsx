import { TestBed } from '@angular/core/testing';

import { NgxFilterService } from './ngx-filter.service';

describe('NgxFilterService', () => {
  let service: NgxFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
