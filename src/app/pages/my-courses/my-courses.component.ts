import { Component, inject, OnInit } from '@angular/core';
import { IEnrollment, Users } from '../../interface/master';
import { ActivatedRoute, Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [SlicePipe ],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponent {
  loginUser: Users | null = null;
  coursesList: IEnrollment[] = [];

  router =inject(Router)

  activatedRoute = inject (ActivatedRoute)
  courseId:number = 0;
  constructor(private route: ActivatedRoute) {
    const storedUser = localStorage.getItem('currentUser');
    this.loginUser = storedUser ? JSON.parse(storedUser) : null;

        this.activatedRoute.params.subscribe((res:any)=> {
      this.courseId = res.id;
    })
  }
  selectedCourse: any;

  ngOnInit(): void {
    this.getEnrollmentByUserId();
  }
  navigatingToCourse(id: number){
    this.router.navigate(['courses', id])
  }

  getEnrollmentByUserId(): void {
    const coursesEnrolled = JSON.parse(
      localStorage.getItem('coursesEnrolled') || '[]'
    );
    // const coursesId = this.route.snapshot.paramMap.get('courseId');
    if (this.loginUser) {
      this.coursesList = coursesEnrolled.filter(
        (e: IEnrollment) =>
          // e.courseId === +coursesId! &&
          e.userId === this.loginUser!.userId
      );
      console.log(this.coursesList);
    }
  }
}
