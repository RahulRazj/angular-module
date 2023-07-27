import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
})
export class ViewCourseComponent implements OnInit {
  course!: ICourse | undefined;
  isCourseBought!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');

    const username = localStorage.getItem('userDetails');

    const userCourses = JSON.parse(
      localStorage.getItem(`${username}Courses`) || '[]'
    );

    courseId &&
      (this.isCourseBought = userCourses.find(
        (course: number) => course === +courseId
      ));

    if (courseId) {
      this.courseService.getCourses().subscribe((courses) => {
        this.course = courses.filter((course) => course.id === +courseId).at(0);
      });
    }
  }

  handleBuyCourse(id: number) {
    this.router.navigate([`course/${id}`])
  }
}
