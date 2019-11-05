import { TestBed } from '@angular/core/testing';

import { NgxTrackerService } from './ngx-tracker.service';

describe('NgxTrackerService', () => {
  let service: NgxTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
