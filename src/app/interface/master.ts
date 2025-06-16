export interface ApiResponse {
  data: any;
}

export interface ApiResponseUser {
  data: any;
  result: boolean;
  message: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdDate: string;
  totalHours: string;
  totalVideos: number;
}
export interface CourseVideo {
  courseVideoId: number;
  courseId: number;
  videoTitle: string;
  videoId: number;
  videoDescription: string;
  videoUrl: string;
  imageUrl: string;
  watched: boolean
}

export class Users {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  createdDate: Date;
  password: string;

  constructor() {
    this.createdDate = new Date();
    this.emailId = '';
    this.fullName = '';
    this.password = '';
    this.userId = 0;
    this.userName = '';
  }
}
export interface IEnrollment {
  enrollmentId: number;
  userId: number;
  courseId: number;
  enrollmentDate: Date;
  isCompleted: boolean;
  courseName: string;
  imageUrl: string;
  courseDescription: string;
}

export class Enrollment {
  enrollmentId: number;
  userId: number;
  courseId: number;
  enrollmentDate: Date;
  isCompleted: boolean;
  courseName: string;
  imageUrl: string;
  courseDescription: string;

  constructor() {
    this.enrollmentDate = new Date();
    this.isCompleted = false;
    this.userId = 0;
    this.courseId = 0;
    this.enrollmentId = 0;
    this.courseName = '';
    this.imageUrl = '';
    this.courseDescription = '';
  }
}
export interface User {
  emailId: string;
  password: string;
  userName: string;

}
