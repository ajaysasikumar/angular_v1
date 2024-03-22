import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviwComponent } from './studentviw.component';

describe('StudentviwComponent', () => {
  let component: StudentviwComponent;
  let fixture: ComponentFixture<StudentviwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentviwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
