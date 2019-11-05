import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFilterComponent } from './ngx-filter.component';

describe('NgxFilterComponent', () => {
  let component: NgxFilterComponent;
  let fixture: ComponentFixture<NgxFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
