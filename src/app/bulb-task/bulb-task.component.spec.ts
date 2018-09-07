import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulbTaskComponent } from './bulb-task.component';

describe('BulbTaskComponent', () => {
  let component: BulbTaskComponent;
  let fixture: ComponentFixture<BulbTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulbTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulbTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
