import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent {
  course!: ICourse | undefined;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log({ id });
    id && (this.course = this.courseService.getCourse(+id));
    console.log('coursecoursecourse', this.course);
  }
}
