export interface ApiResponse {
  data: any;
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
}
