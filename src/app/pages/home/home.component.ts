import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {
  ApiResponse,
  Course,
  CourseVideo,
  Enrollment,
  Users,
} from '../../interface/master';
import { CommonModule } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courseList: Course[] = [];
  selectedCourse: CourseVideo[] = [];
  loginUser: Users | null = null;

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.loadCourses();
    const storedUser = localStorage.getItem('currentUser');
    this.loginUser = storedUser ? JSON.parse(storedUser) : null;
  }

  loadCourses(): void {
    this.masterService.getAllCourses().subscribe((response: ApiResponse) => {
      this.courseList = response.data;
    });
  }

  openVideoModal(course: number): void {
    const modal = document.getElementById('courseModal');
    if (modal) {
      modal.style.display = 'block';
      modal.classList.add('show');
    }
    this.masterService
      .getCourseVideosById(course)
      .subscribe((response: ApiResponse) => {
        if (response.data.length > 0) {
          this.selectedCourse = response.data;
        } else {
          this.selectedCourse = [];
        }
      });
  }
  enrollInCourse(courseId: number): void {
    console.log(this.selectedCourse);

    if (!this.loginUser) {
      alert('Please log in to enroll in a course.');
      return;
    } else {
      const coursesEnrolled = JSON.parse(
        localStorage.getItem('coursesEnrolled') || '[]'
      );
      const enrollment = new Enrollment();
      enrollment.userId = this.loginUser.userId;
      enrollment.courseId = courseId;
      const course = this.courseList.find((c) => c.id === courseId);
      if (course) {
        enrollment.courseName = course.title;
        enrollment.courseDescription = course.description;
        enrollment.imageUrl = course.imageUrl;
      }
      if (
        coursesEnrolled.some(
          (e: Enrollment) =>
            e.courseId === courseId && e.userId === this.loginUser!.userId
        )
      ) {
        alert('You are already enrolled in this course.');
        return;
      }
      coursesEnrolled.push(enrollment);
      localStorage.setItem('coursesEnrolled', JSON.stringify(coursesEnrolled));
      alert('Successfully enrolled in the course!');
    }
  }

  closeVideoModal(): void {
    const modal = document.getElementById('courseModal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
    }
    this.selectedCourse = [];
  }
}
