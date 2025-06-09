import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse, Course } from '../../interface/master';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courseList: Course[] = [];
  selectedCourse: any[] = [];
  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.loadCourses();
    console.log(this.courseList);
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
      .getCourseVideoById(course)
      .subscribe((response: ApiResponse) => {
        if (response.data.length > 0) {
          this.selectedCourse = response.data;
        } else {
          this.selectedCourse = [];
        }
        console.log(response);
      });
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
