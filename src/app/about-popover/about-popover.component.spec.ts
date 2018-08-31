import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPopoverComponent } from './about-popover.component';

describe('AboutPopoverComponent', () => {
  let component: AboutPopoverComponent;
  let fixture: ComponentFixture<AboutPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
