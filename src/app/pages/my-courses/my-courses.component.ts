import { Component, OnInit } from '@angular/core';
import { IEnrollment, Users } from '../../interface/master';
import { ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponent {
  loginUser: Users | null = null;
  coursesList: IEnrollment[] = [];

  constructor(private route: ActivatedRoute) {
    const storedUser = localStorage.getItem('currentUser');
    this.loginUser = storedUser ? JSON.parse(storedUser) : null;
  }
  selectedCourse: any;

  ngOnInit(): void {
    this.getEnrollmentByUserId();
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
