export interface ApiResponse {
  data: any;
}

export interface ApiResponseUser {
  data: any
  result:boolean
  message:string
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

export class User {
        userId: number
        userName:string
        emailId: string
        fullName:string
        role: string
        createdDate: Date
        password: string
        projectName: string
        refreshToken: string
        refreshTokenExpiryTime: string

        constructor(){
          this.createdDate = new Date();
          this.emailId = "";
          this.fullName = "";
          this.password = "";
          this.projectName = "";
          this.refreshToken = "";
          this.refreshTokenExpiryTime = "";
          this.role = "";
          this.userId = 0;
          this.userName = "";
        }
      }