import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinsearchComponent } from './addinsearch.component';

describe('AddinsearchComponent', () => {
  let component: AddinsearchComponent;
  let fixture: ComponentFixture<AddinsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
