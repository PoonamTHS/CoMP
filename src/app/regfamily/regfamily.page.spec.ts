import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegfamilyPage } from './regfamily.page';

describe('RegfamilyPage', () => {
  let component: RegfamilyPage;
  let fixture: ComponentFixture<RegfamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegfamilyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegfamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
