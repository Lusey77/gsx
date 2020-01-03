import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOdataBuilderComponent } from './ngx-odata-builder.component';

describe('NgxOdataBuilderComponent', () => {
  let component: NgxOdataBuilderComponent;
  let fixture: ComponentFixture<NgxOdataBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOdataBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOdataBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
