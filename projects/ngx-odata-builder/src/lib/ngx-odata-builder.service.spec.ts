import { TestBed } from '@angular/core/testing';

import { NgxOdataBuilderService } from './ngx-odata-builder.service';

describe('NgxOdataBuilderService', () => {
  let service: NgxOdataBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOdataBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
