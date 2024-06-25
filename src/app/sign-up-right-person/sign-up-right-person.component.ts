import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-up-right-person',
  standalone: true,
  imports: [CommonModule,FormsModule ,MatIconModule],
  templateUrl: './sign-up-right-person.component.html',
  styleUrl: './sign-up-right-person.component.css'
})
export class SignUpRightPersonComponent {
  CompanyNamerror=false;
  Countryerror=false;
  Cityerror=false;
  imageError=false;
  CompanyDescriptionError=false;
  CompanyName:string='';
  typeCompany:string='';
  ContryCompany:string='';
  CityCompany:string='';
  WebsiteCompany:string='';
  Image:string='';
  CompanyDescription:string='';
  checkCompanyName(){
    this.CompanyNamerror=false;
  }

  checkEmailCompany(){

  }

typeError=false;

checkFieldsCompanytype(){
  this.typeError=false;
}

checkImage(){
  this.imageError=false;
}

checkContryCompany(){
    this.Countryerror=false;
}

checkCity(){

  this.Cityerror=false;
}
Websiteerror=false;
checkWebsite(){
  this.Websiteerror=false;
}


selectedImage:  string = '';
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.selectedImage = e.target.result;
      this.imageError = false; // No error when a file is selected
    };
    reader.readAsDataURL(file);
    console.log(file);
  } else {
   this.imageError = true; // Error when no file is selected
  }
}



checkFieldsCompanyDescription(){
  this.CompanyDescriptionError=false;
}


PasswordError=false;
RepeatpasswordError=false;
checkFieldsPassword(){}
checkFieldsRepeatpassword(){}
signin=false;

nextstep(){
this.CompanyNamerror = !this.CompanyName && this.CompanyName.trim()==='' ;
this.typeError= !this.typeCompany && this.typeCompany.trim()==='' ;;
this.Countryerror= !this.ContryCompany && this.ContryCompany.trim()==='' ;;
this.Cityerror= !this.CityCompany && this.CityCompany.trim()==='' ;;
this.Websiteerror= !this.WebsiteCompany && this.WebsiteCompany.trim()==='' ;;
this.imageError= !this.Image && this.Image.trim()==='' ;;
this.CompanyDescriptionError= !this.CompanyDescription && this.CompanyDescription.trim()==='' ;;

if(!this.Cityerror  && !this.typeError && !this.Countryerror && !this.Cityerror && !this.Websiteerror && !this.imageError && !this.CompanyDescriptionError ){
  this.signin = true;
}


}
preveiw(){
  this.signin = false;
}


}
