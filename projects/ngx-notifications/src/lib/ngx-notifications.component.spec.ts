import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotificationsComponent } from './ngx-notifications.component';

describe('NgxNotificationsComponent', () => {
  let component: NgxNotificationsComponent;
  let fixture: ComponentFixture<NgxNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
