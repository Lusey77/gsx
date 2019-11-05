import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTrackerComponent } from './ngx-tracker.component';

describe('NgxTrackerComponent', () => {
  let component: NgxTrackerComponent;
  let fixture: ComponentFixture<NgxTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
