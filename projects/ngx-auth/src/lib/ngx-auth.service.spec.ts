import { TestBed } from '@angular/core/testing';

import { NgxAuthService } from './ngx-auth.service';

describe('NgxAuthService', () => {
  let service: NgxAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
