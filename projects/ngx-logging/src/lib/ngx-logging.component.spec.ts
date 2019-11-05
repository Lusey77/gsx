import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoggingComponent } from './ngx-logging.component';

describe('NgxLoggingComponent', () => {
  let component: NgxLoggingComponent;
  let fixture: ComponentFixture<NgxLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
