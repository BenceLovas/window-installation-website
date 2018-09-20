import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoreThreeComponent } from './encore-three.component';

describe('EncoreThreeComponent', () => {
  let component: EncoreThreeComponent;
  let fixture: ComponentFixture<EncoreThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncoreThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoreThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
