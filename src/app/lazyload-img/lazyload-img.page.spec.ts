import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadImgPage } from './lazyload-img.page';

describe('LazyloadImgPage', () => {
  let component: LazyloadImgPage;
  let fixture: ComponentFixture<LazyloadImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
