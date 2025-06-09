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
