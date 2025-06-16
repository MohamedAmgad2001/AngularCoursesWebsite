import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { AiComponent } from './pages/ai/ai.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'my-courses',
    component: MyCoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent,
  },
  {
  path: 'ai',
  component: AiComponent,
},
  {
    path: '**',
    component: HomeComponent,
  },
];
