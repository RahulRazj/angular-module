import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private courseServive: CourseService) {}
  courses: { [key: string]: any[] } = {};

  courseCategories = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Python',
    'Data Science',
  ];

  ngOnInit(): void {
    this.courseCategories.forEach(
      (category) =>
        (this.courses[category] =
          this.courseServive.getCoursesByCategory(category))
    );
  }

  handleCourseClick(id: number) {
    this.router.navigate([`course/${id}`]);
  }

  // courseCategories = [
  //   {
  //     categoryName: 'Web Development',
  //     categoryId: 1,
  //     totalCourses: 10,
  //   },
  //   {
  //     categoryName: 'Frontend Development',
  //     categoryId: 2,
  //     totalCourses: 12,
  //   },
  //   {
  //     categoryName: 'Backend Development',
  //     categoryId: 3,
  //     totalCourses: 16,
  //   },
  //   {
  //     categoryName: 'JavaScript',
  //     categoryId: 4,
  //     totalCourses: 9,
  //   },
  //   {
  //     categoryName: 'Data Science',
  //     categoryId: 5,
  //     totalCourses: 9,
  //   },
  // ];
}
