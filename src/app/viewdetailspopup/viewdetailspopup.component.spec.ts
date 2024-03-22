import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailspopupComponent } from './viewdetailspopup.component';

describe('ViewdetailspopupComponent', () => {
  let component: ViewdetailspopupComponent;
  let fixture: ComponentFixture<ViewdetailspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetailspopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdetailspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
