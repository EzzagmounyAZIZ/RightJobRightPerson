import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-in-right-person',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule],
  templateUrl: './sign-in-right-person.component.html',
  styleUrl: './sign-in-right-person.component.css'
})
export class SignInRightPersonComponent {



  EmailSignInRightPerson:string='';
  PasswordSignInRightPerson:string='';

  checkFieldsEmailSignIn(){
    this.emailsignInrightPersonError= false;
  }
  checkFieldsPasswordSignIn(){

    this.PasswordsignInrightPersonError= false;
  }
emailsignInrightPersonError= false;
PasswordsignInrightPersonError= false;


isErrorFormEmail=false;
isErrorFormPassword=false;

signInRightPerson(){
  this.emailsignInrightPersonError = this.EmailSignInRightPerson.trim() === '';
  this.PasswordsignInrightPersonError = this.PasswordSignInRightPerson.trim() === '';

  if(!this.emailsignInrightPersonError){
    if (!/\S+@\S+\.\S+/.test(this.EmailSignInRightPerson)) {
      this.isErrorFormEmail = true;
    }else {
      this.isErrorFormEmail = false;
    }
  }
  if(!this.PasswordsignInrightPersonError){
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.PasswordSignInRightPerson)) {
      this.isErrorFormPassword = true;
    }else{
      this.isErrorFormPassword = false;
    }
  }

  if (!this.emailsignInrightPersonError && !this.PasswordsignInrightPersonError && !this.isErrorFormEmail &&  !this.isErrorFormPassword) {
   /* login(email: string, password: string): void {
      this.authService.login(email, password).subscribe(
        () => {
          console.log('Login successful');
          // Redirect or perform actions upon successful login
        },
        error => {
          console.error('Login failed:', error);
          // Handle login failure
        }
      );
    }
  }*/
  }


}



}
