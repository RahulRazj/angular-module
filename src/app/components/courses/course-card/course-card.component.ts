import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course!: ICourse | undefined
}
