import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserCarusselComponent } from './random-user-carussel.component';

describe('RandomUserCarusselComponent', () => {
  let component: RandomUserCarusselComponent;
  let fixture: ComponentFixture<RandomUserCarusselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserCarusselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserCarusselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
