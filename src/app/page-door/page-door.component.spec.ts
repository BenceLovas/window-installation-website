import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoorComponent } from './page-door.component';

describe('PageDoorComponent', () => {
  let component: PageDoorComponent;
  let fixture: ComponentFixture<PageDoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
