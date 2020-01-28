import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbusesComponent } from './editbuses.component';

describe('EditbusesComponent', () => {
  let component: EditbusesComponent;
  let fixture: ComponentFixture<EditbusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
