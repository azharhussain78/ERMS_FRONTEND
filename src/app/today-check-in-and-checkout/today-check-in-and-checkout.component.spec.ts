import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayCheckInAndCheckoutComponent } from './today-check-in-and-checkout.component';

describe('TodayCheckInAndCheckoutComponent', () => {
  let component: TodayCheckInAndCheckoutComponent;
  let fixture: ComponentFixture<TodayCheckInAndCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayCheckInAndCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayCheckInAndCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
