import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectionPhoneComponent } from './slection-phone.component';

describe('SlectionPhoneComponent', () => {
  let component: SlectionPhoneComponent;
  let fixture: ComponentFixture<SlectionPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlectionPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlectionPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
