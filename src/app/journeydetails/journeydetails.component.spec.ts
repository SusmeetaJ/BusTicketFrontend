import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneydetailsComponent } from './journeydetails.component';

describe('JourneydetailsComponent', () => {
  let component: JourneydetailsComponent;
  let fixture: ComponentFixture<JourneydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
