import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvloComponent } from './ovlo.component';

describe('OvloComponent', () => {
  let component: OvloComponent;
  let fixture: ComponentFixture<OvloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
