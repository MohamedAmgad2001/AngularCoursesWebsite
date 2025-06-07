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
  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.loadCourses();

  }
  loadCourses(): void {
    this.masterService.getAllCourses().subscribe((response: ApiResponse) => {
      console.log(response);
      this.courseList = response.data;
    });
  }
}
