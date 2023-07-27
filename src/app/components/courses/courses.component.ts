import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  searchQuery!: string;
  courses!: ICourse[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  searchThis(searchQuery: string) {
    this.searchQuery = searchQuery;
    if (this.searchQuery && this.searchQuery.length > 2) {
      this.courseService
        .getCourses()
        .subscribe(
          (courses) =>
            (this.courses = courses.filter(
              (course) =>
                course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
            ))
        );
    }
  }


  categoryMapping: { [key: string]: string } = {
    'Web Development': 'web-development',
    'Frontend Development': 'frontend-development',
    'Backend Development': 'backend-development',
    Python: 'python',
    'Data Science': 'data-science',
  };

  getCategoryName(category: string): string {
    for (let key of Object.keys(this.categoryMapping)) {
      if (this.categoryMapping[key] === category) {
        return key;
      }
    }
    return 'never-return';
  }

  getCourseByCategory(categoryQuery: string) {
    categoryQuery = this.getCategoryName(categoryQuery);
    if (categoryQuery) {
      this.courseService
        .getCourses()
        .subscribe(
          (courses) =>
            (this.courses = courses.filter((course) =>
              course.category.includes(categoryQuery)
            ))
        );
    }
  }

  getUserCourses(username: string) {
    const userCourses = JSON.parse(
      localStorage.getItem(`${username}Courses`) || '[]'
    );

    this.courseService
      .getCourses()
      .subscribe(
        (courses) =>
          (this.courses = courses.filter((course) =>
            userCourses.includes(course.id)
          ))
      );
  }

  handleDropdownFilter(event: Event) {
    const choice = +(<HTMLInputElement>event.target).value;
    switch (choice) {
      case 1:
        this.courses.sort(
          (course1, course2) => course2.rating - course1.rating
        );
        break;
      case 2:
        this.courses.sort(
          (course1, course2) => course2.noOfRatings - course1.noOfRatings
        );
        break;
      case 3:
        this.courses.sort((course1, course2) => course1.price - course2.price);
        break;
      case 4:
        this.courses.sort(
          (course1, course2) =>
            course2.studentsEnrolled - course1.studentsEnrolled
        );
        break;
      default:
        break;
    }
  }

  handleRatingFilter(rating: number) {
    this.courseService
      .getCourses()
      .subscribe(
        (courses) =>
          (this.courses = courses.filter((course) => course.rating >= rating))
      );
  }

  handleCourseClick(id: number) {
    this.router.navigate([`course/${id}`]);
  }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.queryParamMap.get('search') || '';
    const userFilter = this.route.snapshot.queryParamMap.get('user') || '';
    const categoryQuery =
      this.route.snapshot.queryParamMap.get('category') || '';

    if (!this.searchQuery && !categoryQuery && !userFilter) {
      this.router.navigate(['/']);
    }

    this.searchQuery && this.searchThis(this.searchQuery);
    categoryQuery && this.getCourseByCategory(categoryQuery);
    const username = localStorage.getItem('userDetails') || '';
    userFilter && username && this.getUserCourses(username);
  }
}
