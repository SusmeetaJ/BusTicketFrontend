import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdchangeComponent } from './pwdchange.component';

describe('PwdchangeComponent', () => {
  let component: PwdchangeComponent;
  let fixture: ComponentFixture<PwdchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
