import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse, IEnrollment, Users } from '../../interface/master';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  // loginUser: Users | null = null;
  // coursesList: IEnrollment | null = null;
  // constructor(
  //   private masterService: MasterService,
  //   private route: ActivatedRoute
  // ) {
  //   const storedUser = localStorage.getItem('currentUser');
  //   this.loginUser = storedUser ? JSON.parse(storedUser) : null;
  // }
  // selectedCourse: any;
  // ngOnInit(): void {
  //   this.getEnrollmentByUserId();
  // }
  // getEnrollmentByUserId(): void {
  //   const coursesEnrolled = JSON.parse(
  //     localStorage.getItem('coursesEnrolled') || '[]'
  //   );
  //   const coursesId = this.route.snapshot.paramMap.get('courseId');
  //   if (this.loginUser) {
  //     this.coursesList = coursesEnrolled.find(
  //       (e: IEnrollment) =>
  //         e.courseId === +coursesId! && e.userId === this.loginUser!.userId
  //     );
  //   }
  // }
  // getData(){
  //       this.masterService
  //         .getCourseVideoById(course)
  //         .subscribe((response: ApiResponse) => {
  //           if (response.data.length > 0) {
  //             this.selectedCourse = response.data;
  //           } else {
  //             this.selectedCourse = [];
  //           }
  //         });
  // }
}
