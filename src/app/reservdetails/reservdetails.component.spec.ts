import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservdetailsComponent } from './reservdetails.component';

describe('ReservdetailsComponent', () => {
  let component: ReservdetailsComponent;
  let fixture: ComponentFixture<ReservdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
