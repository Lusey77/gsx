import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthComponent } from './ngx-auth.component';

describe('NgxAuthComponent', () => {
  let component: NgxAuthComponent;
  let fixture: ComponentFixture<NgxAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
