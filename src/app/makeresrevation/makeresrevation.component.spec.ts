import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeresrevationComponent } from './makeresrevation.component';

describe('MakeresrevationComponent', () => {
  let component: MakeresrevationComponent;
  let fixture: ComponentFixture<MakeresrevationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeresrevationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeresrevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
