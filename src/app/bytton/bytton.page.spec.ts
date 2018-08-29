import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByttonPage } from './bytton.page';

describe('ByttonPage', () => {
  let component: ByttonPage;
  let fixture: ComponentFixture<ByttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByttonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
