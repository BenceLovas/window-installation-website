import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GealanTwoComponent } from './gealan-two.component';

describe('GealanTwoComponent', () => {
  let component: GealanTwoComponent;
  let fixture: ComponentFixture<GealanTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GealanTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GealanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
