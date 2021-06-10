import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWebComponent } from './detail-web.component';

describe('DetailWebComponent', () => {
  let component: DetailWebComponent;
  let fixture: ComponentFixture<DetailWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
