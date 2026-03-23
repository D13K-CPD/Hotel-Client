import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesContextComponent } from './activities-context-component';

describe('ActivitiesContextComponent', () => {
  let component: ActivitiesContextComponent;
  let fixture: ComponentFixture<ActivitiesContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitiesContextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitiesContextComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
