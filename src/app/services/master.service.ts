import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse, ApiResponseUser, Course, User } from '../interface/master';

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

    addNewUser(newUser:User): Observable<ApiResponseUser> {
    return this.http.post<ApiResponseUser>("https://projectapi.gerasim.in/api/OnlineLearning/AddNewUser",newUser);
  }

//   addNewUser(user: any): Observable<ApiResponse> {
//   let users = JSON.parse(localStorage.getItem('users') || '[]');
//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));
//   return of({ result: true, message: 'User added successfully' });
// }
}
