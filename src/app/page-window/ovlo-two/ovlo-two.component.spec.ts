import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvloTwoComponent } from './ovlo-two.component';

describe('OvloTwoComponent', () => {
  let component: OvloTwoComponent;
  let fixture: ComponentFixture<OvloTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvloTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvloTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
