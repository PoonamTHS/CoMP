import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFamilyMemberPage } from './reg-family-member.page';

describe('RegFamilyMemberPage', () => {
  let component: RegFamilyMemberPage;
  let fixture: ComponentFixture<RegFamilyMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegFamilyMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFamilyMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
