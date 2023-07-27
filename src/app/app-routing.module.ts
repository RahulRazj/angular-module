import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ViewCourseComponent } from './components/courses/view-course/view-course.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'view-course/:id', component: ViewCourseComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
