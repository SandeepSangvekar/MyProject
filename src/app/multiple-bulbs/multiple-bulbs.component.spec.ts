import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleBulbsComponent } from './multiple-bulbs.component';

describe('MultipleBulbsComponent', () => {
  let component: MultipleBulbsComponent;
  let fixture: ComponentFixture<MultipleBulbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleBulbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleBulbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
