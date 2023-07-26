import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courseCount!: number
  searchQuery!: string

  courses!: ICourse[];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  searchThis(searchQuery: string) {
    this.searchQuery = searchQuery;
    if (this.searchQuery && this.searchQuery.length > 2) {
      this.courses = this.courseService.searchCourses(this.searchQuery);
      this.courseCount = this.courses.length
      console.log('course count', this.courseCount);
      console.log(this.courses);
    }
  }

  ngOnInit() {
    const searchQuery = this.route.snapshot.queryParamMap.get('search');
    if (searchQuery) {
      const courses = this.courseService.searchCourses(searchQuery);
      console.log(courses);
    }
  }
}
