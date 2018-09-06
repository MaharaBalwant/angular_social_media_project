import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginMenuComponent } from './afterlogin-menu.component';

describe('AfterloginMenuComponent', () => {
  let component: AfterloginMenuComponent;
  let fixture: ComponentFixture<AfterloginMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterloginMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
