import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { skillsTest } from './skillsTest';

@Component({
  selector: 'app-right-person-home',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule],
  templateUrl: './right-person-home.component.html',
  styleUrl: './right-person-home.component.css'
})
export class RightPersonHomeComponent {




  CareerBenefits: string[] = [];
  newCareerBenefits: string = '';

  CareerBenefitsDuplicate =false;

  CareerBenefitsError=false;

  removeCareerBenefits(index: number) {
    this.CareerBenefitsError = false;
    this.CareerBenefits.splice(index, 1);
  }

  addCareerBenefits() {

    this.CareerBenefitsError = !this.newCareerBenefits && this.newCareerBenefits.trim() === '';

    if(!this.CareerBenefitsError){
    if (this.newCareerBenefits && !this.CareerBenefits.includes(this.newCareerBenefits)) {
      this.CareerBenefits.push(this.newCareerBenefits);
      this.newCareerBenefits = '';
      this.CareerBenefitsDuplicate = false;
    } else {
      this.CareerBenefitsDuplicate = true;
    }
  }
  }


  checkFieldsCareerBenefits(){
    this.YouWillError = false;
  }


  /** */


/** */

Bonuspoints: string[] = [];
newBonuspoints: string = '';

BonuspointsDuplicate =false;

BonuspointsError=false;

removeBonuspoints(index: number) {
  this.BonuspointsError = false;
  this.Bonuspoints.splice(index, 1);
}

addBonuspoints() {

  this.BonuspointsError = !this.newBonuspoints && this.newBonuspoints.trim() === '';

  if(!this.BonuspointsError){
  if (this.newBonuspoints && !this.Bonuspoints.includes(this.newBonuspoints)) {
    this.Bonuspoints.push(this.newBonuspoints);
    this.newBonuspoints = '';
    this.BonuspointsDuplicate = false;
  } else {
    this.BonuspointsDuplicate = true;
  }
}
}


checkFieldsBonuspoints(){
  this.YouWillError = false;
}


/** */



/** */
Requirements: string[] = [];
newRequirements: string = '';

RequirementsDuplicate =false;

RequirementsError=false;

removeRequirements(index: number) {
  this.RequirementsError = false;
  this.Requirements.splice(index, 1);
}

addRequirements() {

  this.RequirementsError = !this.newRequirements && this.newRequirements.trim() === '';

  if(!this.RequirementsError){
  if (this.newRequirements && !this.Requirements.includes(this.newRequirements)) {
    this.Requirements.push(this.newRequirements);
    this.newRequirements = '';
    this.RequirementsDuplicate = false;
  } else {
    this.RequirementsDuplicate = true;
  }
}
}


checkFieldsRequirements(){
  this.YouWillError = false;
}


  /** */
  YouWill: string[] = [];
  newYouWill: string = '';

  YouWillDuplicate =false;

  YouWillError=false;

  removeYouWill(index: number) {
    this.YouWillError = false;
    this.YouWill.splice(index, 1);
  }

  addYouWill() {

    this.YouWillError = !this.newYouWill && this.newYouWill.trim() === '';

    if(!this.YouWillError){
    if (this.newYouWill && !this.YouWill.includes(this.newYouWill)) {
      this.YouWill.push(this.newYouWill);
      this.newYouWill = '';
      this.YouWillDuplicate = false;
    } else {
      this.YouWillDuplicate = true;
    }
  }
  }


  checkFieldsYouWill(){
    this.YouWillError = false;
  }


/** */


  skillsTest : skillsTest[] = [];

  newskilltest() {
    this.TestISimportent=false;
    this.skillsTest.push({
      skill: '',
      Level: '',
    }); // Add a new work experience
  }


  deleteskillTest(index: number) {
    this.skillsTest.splice(index, 1);
    this.skillTestskillError.splice(index, 1);
    this.skillTestLevelError.splice(index, 1);
  }




  /**** */
  btnaddnewofferisclicked = false;

  addnewofferbutton(){
    this.btnaddnewofferisclicked = true;
    this.newskilltest();
  }
  blackbgclose(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const zIndex = clickedElement.style.zIndex;
    if (zIndex === "1") {
      // Execute your blackbgclose() method only if the clicked element has z-index 1
      // Implement your logic here

    // this.YouWill=[];


      this.btnaddnewofferisclicked = false;
      this.DeleteOffer();



    }
  }





  DomaineNameError=false;
  JobPostNameError=false;
  CountryError=false;
  CityError=false;
  RemoteError=false;
  TypeContractError=false;
  skillTestskillError: boolean[] = [];
  skillTestLevelError: boolean[] = [];


  /**info */

DomaineName: string = '';

JobPostName: string = '';

Country: string = '';

City: string = '';

Remote: string = '';

TypeContract: string = '';



checkFieldsskillTestskill(index: number){
  const skillTest = this.skillsTest[index];
  this.skillTestskillError[index] = !skillTest.skill && skillTest.skill.trim() === '';
}
checkFieldsskillTestLevel(index: number){
  const skillTestLevel = this.skillsTest[index];
  this.skillTestLevelError[index] = !skillTestLevel.Level && skillTestLevel.Level.trim() != '';
}

checkFieldsDomaineName(){
this.DomaineNameError=false;
}

checkFieldsJobPostName(){
this.JobPostNameError=false;
}

checkFieldsCountry(){
this.CountryError=false;
}


checkFieldsCity(){
this.CityError=false;
}

checkFieldsRemote(){
this.RemoteError= false;
}

checkFieldsTypeContract(){
this.TypeContractError=false;
}








TestISimportent=false;


skillstestPassed=false;
ADDOFFERNEWTOOFFERS(){

  this.DomaineNameError = !this.DomaineName && this.DomaineName.trim() === '';
  this.JobPostNameError= !this.JobPostName && this.JobPostName.trim() === '';
  this.CountryError= !this.Country && this.Country.trim() === '';
  this.CityError= !this.City && this.City.trim() === '';
  this.RemoteError= !this.Remote && this.Remote.trim() === '';
  this.TypeContractError= !this.TypeContract && this.TypeContract.trim()=== '';

  this.YouWillError = this.YouWill.length === 0;
  this.RequirementsError = this.Requirements.length === 0;
  this.BonuspointsError = this.Bonuspoints.length === 0;
  this.CareerBenefitsError = this.CareerBenefits.length === 0;


  if (this.skillsTest.length === 0) {
    this.TestISimportent=true;
  }else{
    this.TestISimportent=false;
   for (let i = 0; i < this.skillsTest.length; i++) {
     const skillsTest = this.skillsTest[i];
     // Check if any field of the current work experience is empty
     this.skillTestskillError[i] = !skillsTest.skill || skillsTest.skill.trim() === '';
     this.skillTestLevelError[i] = !skillsTest.Level || skillsTest.Level.trim() === '';
if(this.skillTestskillError[i] === false && this.skillTestLevelError[i] ===false){
   this.skillstestPassed=true;
}
    }
  }



  /*** */
  if(!this.DomaineNameError && !this.JobPostNameError && !this.CountryError && !this.CityError && !this.RemoteError && !this.TypeContractError && !this.YouWillError && !this.RequirementsError && !this.BonuspointsError && !this.CareerBenefitsError && !this.skillstestPassed){




  }





}


DeleteOffer(){

  if(!this.DomaineName || this.DomaineName.trim() != ''){
    this.DomaineName='';
    this.DomaineNameError = false;
  }

  if(!this.JobPostName || this.JobPostName.trim() != ''){
    this.JobPostName = '';
    this.JobPostNameError= false;
  }

  if(!this.Country || this.Country.trim() != ''){
    this.Country='';
    this.CountryError= false;
  }

  if(!this.City || this.City.trim() != ''){
    this.City='';
    this.CityError= false;
  }

  if(!this.Remote || this.Remote.trim() != 'Select...'){
    this.Remote ='';
    this.RemoteError= false;
  }

  if(!this.TypeContract || this.TypeContract.trim() != 'Select...'){
    this.TypeContract='';
    this.TypeContractError= false;
  }



  if(!this.YouWill ||this.YouWill.length >= 0){
    this.YouWill = [];
    this.newYouWill='';
    this.YouWillError = false;
    this.YouWillDuplicate=false;
  }

  if(!this.Requirements ||this.Requirements.length >= 0){
    this.Requirements = [];
    this.newRequirements='';
    this.RequirementsError = false;
    this.RequirementsDuplicate=false;
  }

  if(!this.Bonuspoints ||this.Bonuspoints.length >= 0){
    this.Bonuspoints = [];
    this.newBonuspoints='';
    this.BonuspointsError = false;
    this.BonuspointsDuplicate = false;
  }

  if(!this.CareerBenefits ||this.CareerBenefits.length >= 0){
    this.CareerBenefits = [];
    this.newCareerBenefits='';
    this.CareerBenefitsError = false;
    this.CareerBenefitsDuplicate=false;
  }




  if (this.skillsTest.length === 0) {
    this.TestISimportent=false;
  }else{
    this.TestISimportent=false;
    this.skillsTest = [];
  }

}


}
