import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShutterComponent } from './page-shutter.component';

describe('PageShutterComponent', () => {
  let component: PageShutterComponent;
  let fixture: ComponentFixture<PageShutterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShutterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
