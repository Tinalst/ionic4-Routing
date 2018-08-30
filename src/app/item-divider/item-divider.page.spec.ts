import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDividerPage } from './item-divider.page';

describe('ItemDividerPage', () => {
  let component: ItemDividerPage;
  let fixture: ComponentFixture<ItemDividerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDividerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDividerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
