import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatFabComponent } from './float-fab.component';

describe('FloatFabComponent', () => {
  let component: FloatFabComponent;
  let fixture: ComponentFixture<FloatFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
