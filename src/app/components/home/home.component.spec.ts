import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have course categories array that contains course categories', function () {
    it('passes if arrays are equal', function () {
      var arr = [1, 2, 3];
      expect(arr).toEqual([1, 2, 3]);
    });
  });

  describe('toEqual', function () {
    it('should have course categories array that contains course categories', function () {
      // var arr = [1, 2, 3];
      const app = fixture.componentInstance;
      const courseCategories = app.courseCategories;
      expect(courseCategories).toEqual([
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'Python',
        'Data Science',
      ]);
    });
  });
});
