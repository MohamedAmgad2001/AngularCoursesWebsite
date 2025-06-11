import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponse, CourseVideo, IEnrollment, Users } from '../../interface/master';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit{

    router =inject(Router)
    activatedRoute = inject (ActivatedRoute)
    course:any
    selectedCourse: CourseVideo[] = [];
    currentVideoUrl:string = '';
    safeUrl: SafeResourceUrl | undefined
    selectedIndex:number = 0;

    notWatched:boolean = false;

    constructor(private masterServices:MasterService , private sanitize:DomSanitizer){}
  ngOnInit(): void {
    
  this.course = Number(this.activatedRoute.snapshot.params['id']);
  console.log(this.course);
  this.getCourseByID()
  }
getCourseByID(){
  this.masterServices.getCourseVideosById(this.course).subscribe((response: ApiResponse) => {
        if (response.data.length > 0) {
          this.selectedCourse = response.data;
          console.log(this.selectedCourse);
          
        } else {
          this.selectedCourse = [];
        }
      });
}
sanitizeUrl(url:string):SafeResourceUrl{
  return this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+url)
}
watchVideo(url:CourseVideo){
  this.safeUrl = this.sanitizeUrl(url.videoUrl);

  url.watched=true
}

getName(index:number){
this.selectedIndex = index

this.notWatched = true;

}

}
