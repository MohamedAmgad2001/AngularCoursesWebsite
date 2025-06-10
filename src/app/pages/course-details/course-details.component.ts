import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse } from '../../interface/master';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {


  constructor(private masterService:MasterService){}
  selectedCourse:any  ;

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
