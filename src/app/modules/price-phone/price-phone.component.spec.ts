import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePhoneComponent } from './price-phone.component';

describe('PricePhoneComponent', () => {
  let component: PricePhoneComponent;
  let fixture: ComponentFixture<PricePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
