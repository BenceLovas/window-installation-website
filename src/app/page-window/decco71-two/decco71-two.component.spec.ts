import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Decco71TwoComponent } from './decco71-two.component';

describe('Decco71TwoComponent', () => {
  let component: Decco71TwoComponent;
  let fixture: ComponentFixture<Decco71TwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decco71TwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Decco71TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
