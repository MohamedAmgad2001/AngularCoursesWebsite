import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, Course } from '../interface/master';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  getAllCourses(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`assets/data/courses.json`);
  }
  getCourseVideoById(courseId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`assets/data/courseVideos.json`).pipe(
      map((response: ApiResponse) => {
        const videos = response.data.filter(
          (item: { courseId: number }) => item.courseId === courseId
        );
        return { data: videos };
      })
    );
  }
}
