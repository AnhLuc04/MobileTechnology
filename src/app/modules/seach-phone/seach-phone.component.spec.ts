import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachPhoneComponent } from './seach-phone.component';

describe('SeachPhoneComponent', () => {
  let component: SeachPhoneComponent;
  let fixture: ComponentFixture<SeachPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
