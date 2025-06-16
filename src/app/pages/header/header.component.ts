import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApiResponse,
  ApiResponseUser,
  User,
  Users,
} from '../../interface/master';
import { MasterService } from '../../services/master.service';
import { RouterLink } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {


  isLoginFormVisiable: boolean = true;

  userRegisterObj: Users = new Users();
  userLoginObj: User = {
    emailId: '',
    password: '',
    userName: ''
  };
  loginUser: User | null = null;
  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    this.loginUser = storedUser ? JSON.parse(storedUser) : null;
  }

  masterServ = inject(MasterService);
  toggleForm(val: boolean) {
    this.isLoginFormVisiable = val;
  }

  onRegister() {
      if(!this.userRegisterObj.fullName){
        let regName = document.getElementById("regName")
        regName?.classList.remove("d-none")
      setTimeout(() => {
        regName?.classList.add("d-none")
      }, 4000);
      return;
  }
    if(!this.userRegisterObj.emailId){
        let regMail = document.getElementById("regMail")
        regMail?.classList.remove("d-none")
      setTimeout(() => {
        regMail?.classList.add("d-none")
      }, 4000);
      return;
  }
    if(!this.userRegisterObj.userName){
        let regUser = document.getElementById("regUser")
        regUser?.classList.remove("d-none")
      setTimeout(() => {
        regUser?.classList.add("d-none")
      }, 4000);
      return;
  }
    if(!this.userRegisterObj.password){
        let regPass = document.getElementById("regPass")
        regPass?.classList.remove("d-none")
      setTimeout(() => {
        regPass?.classList.add("d-none")
      }, 4000);
      return;
  }
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push({
      userName: this.userRegisterObj.userName,
      emailId: this.userRegisterObj.emailId,
      fullName: this.userRegisterObj.fullName,
      password: this.userRegisterObj.password,
      createdDate: new Date(),
      userId: users.length + 1,
    });

    localStorage.setItem('users', JSON.stringify(users));

    let toast = document.getElementById("toast");
      if(toast){
        toast.innerText = "User registered successfully!"
      }
      this.onLoginSuccess();
    // alert('User registered successfully!');
  }

  onLogin() {
  if(!this.userLoginObj.emailId){
        let emailErr = document.getElementById("emailErr")
        emailErr?.classList.remove("d-none")
      setTimeout(() => {
        emailErr?.classList.add("d-none")
      }, 4000);
      return;
  }
  if(!this.userLoginObj.password){
      let passErr = document.getElementById("passErr")
      passErr?.classList.remove("d-none")
      setTimeout(() => {
        passErr?.classList.add("d-none")
      }, 1000);
      return;
  }
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: User) =>
        u.emailId === this.userLoginObj.emailId &&
        u.password === this.userLoginObj.password
    );
    if (user) {
      this.onLoginSuccess();
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loginUser = user;
      console.log(user);
      
    } else {
      let toast = document.getElementById("toast");
      if(toast){
        toast.innerText = "Invalid email or password"
      }
      this.onLoginSuccess();
    }
    
  }

    onLoginSuccess() {
    // Show toast after successful login
    const toastEl = document.getElementById('loginToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }


  onLogout() {
    localStorage.removeItem('currentUser');
    this.loginUser = null;
  }
  // onRegister() {
  //   this.masterServ
  //     .addNewUser(this.userRegisterObj)
  //     .subscribe((res: ApiResponseUser) => {
  //       if (res.result) {
  //         alert('User Registered');
  //         this.closeModal();
  //       } else {
  //         alert('User Registration Failed');
  //       }
  //     });
  // }
}
