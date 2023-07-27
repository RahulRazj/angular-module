import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService, ICourse } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // 
  @Output() searchCriteria = new EventEmitter<string>();
  courses: { [key: string]: any[] } = {};

  constructor(private router: Router, private courseServive: CourseService) {}

  // top categories defined for the home component
  courseCategories = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Python',
    'Data Science',
  ];

  // mapping category values with internal keys for filtering
  categoryMapping: { [key: string]: string } = {
    'Web Development': 'web-development',
    'Frontend Development': 'frontend-development',
    'Backend Development': 'backend-development',
    Python: 'python',
    'Data Science': 'data-science',
  };

  ngOnInit(): void {
    // getting courses based on categories
    this.courseServive.getCourses().subscribe((courses) => {
      this.courseCategories.forEach(
        (category) =>
          (this.courses[category] = courses.filter((course) =>
            course.category.includes(category)
          ))
      );
    });
  }

  handleCourseClick(id: number) {
    this.router.navigate([`course/${id}`]);
  }

  handleExplore(id: string) {
    this.router.navigate(['course'], { queryParams: { category: id } });
    this.searchCriteria.emit(id);
  }
}
