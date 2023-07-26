import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  // { path: 'course?query', component: CourseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
