import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeThreeComponent } from './prime-three.component';

describe('PrimeThreeComponent', () => {
  let component: PrimeThreeComponent;
  let fixture: ComponentFixture<PrimeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
