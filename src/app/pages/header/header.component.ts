import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApiResponse,
  ApiResponseUser,
  User,
  Users,
} from '../../interface/master';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoginFormVisiable: boolean = true;

  userRegisterObj: Users = new Users();
  userLoginObj: User = {
    emailId: '',
    password: '',
  };

  masterServ = inject(MasterService);
  toggleForm(val: boolean) {
    this.isLoginFormVisiable = val;
  }

  onRegister() {
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

    alert('User registered successfully!');
    this.closeModal();
  }

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: User) =>
        u.emailId === this.userLoginObj.emailId &&
        u.password === this.userLoginObj.password
    );
    if (user) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password');
    }
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

  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
