import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/master';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiUrl: string = 'assets/data/courses.json';
  constructor(private http: HttpClient) {}
  getAllCourses(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
