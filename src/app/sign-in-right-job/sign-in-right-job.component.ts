import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-in-right-job',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule],
  templateUrl: './sign-in-right-job.component.html',
  styleUrl: './sign-in-right-job.component.css'
})
export class SignInRightJobComponent {

EmailSignInRightJob:string ='';
PasswordSignInRightJob :string ='';

checkFieldsEmailSignIn(){
  this.emailsignInrightjobError=false;
}
checkFieldsPasswordSignIn(){
  this.PasswordsignInrightjobError=false;
}



emailsignInrightjobError=false;
PasswordsignInrightjobError=false;


isErrorFormEmail=false;
isErrorFormPassword=false;
signInRightJob(){
  this.emailsignInrightjobError = this.EmailSignInRightJob.trim() === '';
  this.PasswordsignInrightjobError = this.PasswordSignInRightJob.trim() === '';
if(!this.emailsignInrightjobError){
  if (!/\S+@\S+\.\S+/.test(this.EmailSignInRightJob)) {
    this.isErrorFormEmail = true;
  }else {
    this.isErrorFormEmail = false;
  }
}
if(!this.PasswordsignInrightjobError){
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.PasswordSignInRightJob)) {
    this.isErrorFormPassword = true;
  }else{
    this.isErrorFormPassword = false;
  }
}
  if (!this.emailsignInrightjobError && !this.PasswordsignInrightjobError&& !this.isErrorFormEmail &&  !this.isErrorFormPassword) {
        this.SignInRightJob();
  }


}
SignInRightJob(){
console.log(this.EmailSignInRightJob , this.PasswordSignInRightJob);
}
}
