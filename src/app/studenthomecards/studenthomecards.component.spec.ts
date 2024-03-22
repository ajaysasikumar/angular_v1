import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthomecardsComponent } from './studenthomecards.component';


describe('StudenthomecardsComponent', () => {
  let component: StudenthomecardsComponent;
  let fixture: ComponentFixture<StudenthomecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenthomecardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthomecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
