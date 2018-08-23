import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShadeComponent } from './page-shade.component';

describe('PageShadeComponent', () => {
  let component: PageShadeComponent;
  let fixture: ComponentFixture<PageShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
