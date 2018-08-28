import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResposiveGridPage } from './resposive-grid.page';

describe('ResposiveGridPage', () => {
  let component: ResposiveGridPage;
  let fixture: ComponentFixture<ResposiveGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResposiveGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResposiveGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
