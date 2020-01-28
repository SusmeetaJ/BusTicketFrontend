import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroutesComponent } from './showroutes.component';

describe('ShowroutesComponent', () => {
  let component: ShowroutesComponent;
  let fixture: ComponentFixture<ShowroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
