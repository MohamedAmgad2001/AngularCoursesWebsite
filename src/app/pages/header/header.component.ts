import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponse, ApiResponseUser, User } from '../../interface/master';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoginFormVisiable:boolean =true;


  userRegisterObj:User = new User();

  masterServ = inject(MasterService)
    toggleForm(val:boolean){
      this.isLoginFormVisiable = val;
    
  }

  onRegister(){
    this.masterServ.addNewUser(this.userRegisterObj).subscribe((res:ApiResponseUser)=>{
      if(res.result){
        alert("User Registered");
        this.closeModal();
      }else{
        alert(res.message)
      }
    })
  }






//   onRegister() {
//   this.masterServ.addNewUser(this.userRegisterObj).subscribe((res: ApiResponse) => {
//     if (res.result) {
//       console.log('User added successfully');
//       // maybe reset form or show message
//     }
//   });
// }



    closeModal() {
          const modal = document.getElementById("exampleModal");
    if(modal){
      modal.style.display='none'
    }
    }

  }











  // loginModal() {
  //   let login = document.getElementById("Login")
  //   let reg = document.getElementById("Register")
  //   let heading = document.getElementById("heading")
  //   let loginBtn = document.getElementById("loginBtn")

  //   if (login?.classList.contains("btn-secondary")) {
  //     login.classList.remove("btn-secondary");
  //     login.classList.add("btn-success");
  //     reg?.classList.remove("btn-success");
  //     reg?.classList.add("btn-secondary");
  //   }
  //   if (heading && loginBtn) {
  //     heading.textContent = "Login to Your Account";
  //     loginBtn.textContent = "Login";
  //   }

  // }

  // regModal() {
  //   let login = document.getElementById("Login")
  //   let reg = document.getElementById("Register")
  //   let heading = document.getElementById("heading")
  //   let loginBtn = document.getElementById("loginBtn")
  //   let modal = document.getElementById("modal")

  //   if (reg?.classList.contains("btn-secondary")) {
  //     reg.classList.remove("btn-secondary");
  //     reg.classList.add("btn-success");
  //     login?.classList.remove("btn-success");
  //     login?.classList.add("btn-secondary");
  //   }

  //   if (heading && loginBtn) {
  //     heading.textContent = "Register for a Course";
  //     loginBtn.textContent = "Register";
  //   }
  //   if (modal) {
  //     let div = document.createElement('div');
  //     div.classList.add("fullName mt-4");

  //     let label = document.createElement("label");
  //     label.classList.add("d-block");
  //     label.textContent = "Full Name";

  //     let input = document.createElement("input");
  //     input.classList.add("input-style w-100");

  //     div.appendChild(label);
  //     div.appendChild(input);

  //   }
  // }

  // openModal(){
  //   const modal = document.getElementById("exampleModal");
  //   if(modal){
  //     modal.style.display='block'
  //   }
  // }



