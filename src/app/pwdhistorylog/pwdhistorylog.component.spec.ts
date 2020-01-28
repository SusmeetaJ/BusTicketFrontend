import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdhistorylogComponent } from './pwdhistorylog.component';

describe('PwdhistorylogComponent', () => {
  let component: PwdhistorylogComponent;
  let fixture: ComponentFixture<PwdhistorylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdhistorylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdhistorylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
