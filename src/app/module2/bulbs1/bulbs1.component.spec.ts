import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bulbs1Component } from './bulbs1.component';

describe('Bulbs1Component', () => {
  let component: Bulbs1Component;
  let fixture: ComponentFixture<Bulbs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bulbs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bulbs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
