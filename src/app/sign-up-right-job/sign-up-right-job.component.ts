import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { WorkExperience } from './workExperiences';
import {  Educations } from './Educations';
import { Certifications } from './Certifications';
import { Languages } from './Languages';
import { InscriptionRightPersonResolver } from './Resolvers/InscriptionRightPersonResolver';
import { Skills } from './Skills';
import { Interests } from './Interests';


@Component({
  selector: 'app-sign-up-right-job',
  standalone: true,
  imports: [CommonModule,FormsModule ,MatIconModule],
  templateUrl: './sign-up-right-job.component.html',
  styleUrl: './sign-up-right-job.component.css'
})
export class SignUpRightJobComponent {


  constructor(private inscriptionResolver: InscriptionRightPersonResolver) {}


Image: string = '';

checkFieldsPassword(){
  this.PasswordError=false;
}
checkFieldsRepeatpassword(){
  this.RepeatpasswordError=   false;//!(this.password.trim() === this.confermedpassword.trim());
}
PasswordError=false;
RepeatpasswordError=false;

checkFieldsInterestsAndHobbies(){
  this.InterestsHobbiesError = false;
}
InterestsHobbiesError=false;
checkFieldsLanguage(index: number){
const language = this.Languages[index];
this.LanguageError[index] = false;// !language.Language || language.Language.trim() === '';
}
checkFieldsLevel(index: number){
  const language = this.Languages[index];
  this.LevelError[index] = false;//!language.Level || language.Level.trim()==='';
}
LanguageError: boolean[] = [];
LevelError: boolean[] = [];


checkFieldsSkills(){
  this.newSkillError = false;
}

checkFirstName() {
  this.firstNamerror = false;
}
checkLastName() {
  this.lastNamerror = false;
}
checkEmail() {
  this.emailerror = false;
}
checkPhone() {
  this.phonerror = false;
}
checkAddress() {
  this.addresserror = false;
}
checkCountry() {
  this.countryerror = false;
}
checkCity() {
  this.cityerror = false;
}
checkImage() {
  this.emailerror = false;
}
checkTargetTitle(){
  this.TargetTitleError=false;
}
checkProfessionalSummarie(){
  this.ProfessionalSummariesError=false;
}


checkFieldsexperienceCompanyName(index: number) {
  const experience = this.workExperiences[index];
  this.companynameError[index] = !experience.companyName || experience.companyName.trim() === '';
}
checkFieldsexperiencePosition(index: number) {
  const experience = this.workExperiences[index];
  this.PositionError[index] = !experience.position || experience.position.trim() === '';
}
checkFieldsexperienceLocation(index: number) {
  const experience = this.workExperiences[index];
  this.LocationError[index] = !experience.location || experience.location.trim() === '';
}
checkFieldsexperiencetype(index: number) {
  const experience = this.workExperiences[index];
  this.TypeExperienceError[index] = false;//!experience.type || experience.type.trim() != '';
}
checkFieldsexperienceStartDate(index: number) {
  const experience = this.workExperiences[index];
  this.StartDateError[index] = !experience.startDate;
}
checkFieldsexperienceEndDate(index: number) {
  const experience = this.workExperiences[index];
  this.EndDateError[index] = !experience.endDate;
}
checkFieldsexperienceCompanyDescription(index: number) {
  const experience = this.workExperiences[index];
  this.CompanyDescriptionError[index] = !experience.companyDescription || experience.companyDescription.trim() === '';
}
/**** */
checkFieldsEducationsInstitutionName(index: number){
   const education = this.education[index];
   this.InstitutionNameError[index] = !education.InstitutionName || education.InstitutionName.trim() === '';
}
checkFieldsEducationsStudy(index: number){
  const education = this.education[index];
   this.StudyError[index] = !education.Study || education.Study.trim() === '' ;
}
checkFieldsEducationslocation(index: number){
  const education = this.education[index];
   this.locationEducationError[index] = !education.locationEducation || education.locationEducation.trim() === '';
}
checkFieldsEducationstype(index: number){
  const education = this.education[index];
   this.typeEducationError[index] = false;//!education.typeEducation || education.typeEducation.trim() === '';
}
checkFieldsEducationsstartDate(index: number){
  const education = this.education[index];
   this.startDateEducationError[index] = !education.startDateEducation;
}
checkFieldsEducationsendDate(index: number){
  const education = this.education[index];
   this.endDateEducationError[index] = !education.endDateEducation;
}
InstitutionNameError: boolean[] = [];
StudyError: boolean[] = [];
locationEducationError: boolean[] = [];
typeEducationError: boolean[] = [];
startDateEducationError: boolean[] = [];
endDateEducationError: boolean[] = [];

/** */
checkFieldsCertificationsName(index: number){
 const certification = this.certification[index];
 this.CertificationsNameError[index] = !certification.certificationName || certification.certificationName.trim() === '';
}
checkFieldsCertificationorganization(index: number){
  const certification = this.certification[index];
 this.organizationError[index] = !certification.organization || certification.organization.trim() === '' ;
}
checkFieldsCertificationCompletion(index: number){
  const certification = this.certification[index];
 this.CompletionError[index] = !certification.dateOfCompletion ;
}
CertificationsNameError: boolean[] = [];
organizationError: boolean[] = [];
CompletionError: boolean[] = [];




firstNamerror = false;
lastNamerror = false;
emailerror= false;
phonerror= false;
addresserror= false;
countryerror= false;
cityerror= false;
imageError=false;

TargetTitleError=false;

ProfessionalSummariesError=false;
/*
companynameError=false;
PositionError=false;
LocationError=false;
typeError=false;
StartDateError=false;
EndDateError=false;
CompanyDescriptionError=false;
*/
companynameError: boolean[] = [];
PositionError: boolean[] = [];
LocationError: boolean[] = [];
TypeExperienceError: boolean[] = [];
StartDateError: boolean[] = [];
EndDateError: boolean[] = [];
CompanyDescriptionError: boolean[] = [];

newSkillError =false;

hasErrors :boolean[] =[]


passwordiseasy =false;

confermedpasswordnotcorrect =false;



stepsCompleted: boolean[] = [false, false, false, false, false, false, false, false, false];

areAllStepsCompleted(stepsCompleted: boolean[]): boolean {
  return stepsCompleted.every(status => status === true);
}
areAllFieldsFilled(step: string) {
  if (step === 'step0') {
    this.firstNamerror = this.firstName === '';
    this.lastNamerror = this.lastName === '';
    this.emailerror = this.email === '';
    this.phonerror = this.tel === '';
    this.addresserror = this.Address === '';
    this.countryerror = this.Country === '';
    this.cityerror = this.City === '';
    this.imageError = this.Image === '';
    // Return true if there are no errors
    if (!this.firstNamerror && !this.lastNamerror && !this.emailerror &&
        !this.phonerror && !this.addresserror && !this.countryerror &&
        !this.cityerror && !this.imageError) {
         /* const num = parseInt(step.replace('step', ''), 10);
          this.stepstruefuls[num][step] = true;*/
          this.stepsCompleted[0] = true;
          this.nextStep();

    }
  }

  if (step === 'step1') {
    this.TargetTitleError = this.TargetTitle === '';
    // Return true if there are no errors
    if (!this.TargetTitleError ) {
     /* const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/
      this.stepsCompleted[1] = true;
      this.nextStep();

    }



  }



  if (step === 'step2') {

    this.ProfessionalSummariesError = this.ProfessionalSummarie === '';
    // Return true if there are no errors
    if (!this.ProfessionalSummariesError ) {
    /*  const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/
      this.stepsCompleted[2] = true;
      this.nextStep();

    }
  }

  if (step === 'step3') {
    // Reset error flags
    this.companynameError = [];
    this.PositionError = [];
    this.LocationError = [];
    this.TypeExperienceError = [];
    this.StartDateError = [];
    this.EndDateError = [];
    this.CompanyDescriptionError = [];

     // Check if there are no work experiences added
  if (this.workExperiences.length === 0) {
    return; // Exit the function early if there are no work experiences
  }

    // Iterate over each work experience
    let hasAnyError = false;
    for (let i = 0; i < this.workExperiences.length; i++) {
      const workExperience = this.workExperiences[i];
      // Check if any field of the current work experience is empty
      this.companynameError[i] = !workExperience.companyName || workExperience.companyName.trim() === '';
      this.PositionError[i] = !workExperience.position || workExperience.position.trim() === '';
      this.LocationError[i] = !workExperience.location || workExperience.location.trim() === '';
      this.TypeExperienceError[i] = !workExperience.TypeExperience || workExperience.TypeExperience.trim() === '';
      this.StartDateError[i] = !workExperience.startDate;
      this.EndDateError[i] = !workExperience.endDate;
      this.CompanyDescriptionError[i] = !workExperience.companyDescription || workExperience.companyDescription.trim() === '';

      // Check if any error exists in the current work experience
      if (this.companynameError[i] || this.PositionError[i] || this.LocationError[i] ||
          this.TypeExperienceError[i] || this.StartDateError[i] || this.EndDateError[i] ||
          this.CompanyDescriptionError[i]) {
        hasAnyError = true;
      }
    }

    // If all work experiences are completed without errors, move to the next step
    if (this.workExperiences != null && !hasAnyError && this.workExperiences.every((experience) => this.isExperienceCompleted(experience))) {

    /*  const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/
      this.stepsCompleted[3] = true;
      this.nextStep();
    }
  }




  if (step === 'step4') {
 // Reset error flags
 this.InstitutionNameError = [];
 this.StudyError = [];
 this.locationEducationError = [];
 this.typeEducationError = [];
 this.startDateEducationError = [];
 this.endDateEducationError = [];

 if (this.education.length === 0) {
  return; // Exit the function early if there are no work experiences
}

 // Iterate over each work experience
 let hasAnyErroreducation = false;
 for (let i = 0; i < this.education.length; i++) {
   const education = this.education[i];
   // Check if any field of the current work experience is empty
   this.InstitutionNameError[i] = !education.InstitutionName || education.InstitutionName.trim() === '';
   this.StudyError[i] = !education.Study || education.Study.trim() === '';
   this.locationEducationError[i] = !education.locationEducation || education.locationEducation.trim() === '';
   this.typeEducationError[i] = !education.typeEducation || education.typeEducation.trim() === '';
   this.startDateEducationError[i] = !education.startDateEducation;
   this.endDateEducationError[i] = !education.endDateEducation;

   // Check if any error exists in the current work experience
   if ( this.InstitutionNameError[i] || this.StudyError[i] ||  this.locationEducationError[i] || this.typeEducationError[i] ||
    this.startDateEducationError[i] ||  this.endDateEducationError[i]
   ) {
    hasAnyErroreducation = true;
   }
 }

 // If all work experiences are completed without errors, move to the next step
 if (!hasAnyErroreducation && this.education.every((education) => this.isEducationCompleted(education))) {
 /* const num = parseInt(step.replace('step', ''), 10);
  this.stepstruefuls[num][step] = true;*/
  this.stepsCompleted[4] = true;
  this.nextStep();

 }
// if (!hasAnyError && this.workExperiences.every((experience) => this.isExperienceCompleted(experience))) {
  }

  if (step === 'step5') {
 // Reset error flags
 this.CertificationsNameError = [];
 this.organizationError = [];
 this.CompletionError = [];

 if (this.certification.length === 0) {
  return; // Exit the function early if there are no work experiences
}


 // Iterate over each work experience
 let hasAnyErrorCertifications = false;
 for (let i = 0; i < this.certification.length; i++) {
   const certification = this.certification[i];
   // Check if any field of the current work experience is empty
   this.CertificationsNameError[i] = !certification.certificationName || certification.certificationName.trim() === '';
   this.organizationError[i] = !certification.organization || certification.organization.trim() === '';
   this.CompletionError[i] = !certification.dateOfCompletion;
console.log(this.CertificationsNameError[i],this.organizationError[i],   this.CompletionError[i])
   // Check if any error exists in the current work experience
   if ( this.CertificationsNameError[i] || this.organizationError[i] ||  this.CompletionError[i]
   ) {
    hasAnyErrorCertifications = true;
   }
 }

 // If all work experiences are completed without errors, move to the next step
 if (this.certification.every((certification) => this.iscertificationCompleted(certification))) {
/*  const num = parseInt(step.replace('step', ''), 10);
  this.stepstruefuls[num][step] = true;*/
  this.stepsCompleted[5] = true;
  this.nextStep();

 }
  }

  if (step === 'step6') {

    this.newSkillError = this.skills.length === 0;
    // Return true if there are no errors
    if (!this.newSkillError ) {
   /*   const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/
      this.stepsCompleted[6] = true;
      this.nextStep();

    }

  }

  if (step === 'step7') {
 // Reset error flags
 this.LanguageError= [];
 this.LevelError= [];

 if (this.Languages.length === 0) {
  return; // Exit the function early if there are no work experiences
}


 // Iterate over each work experience
 let hasAnyErrorLanguages = false;
 for (let i = 0; i < this.Languages.length; i++) {
   const Languages = this.Languages[i];
   // Check if any field of the current work experience is empty
   this.LanguageError[i] = !Languages.langage || Languages.langage.trim() === '';
   this.LevelError[i] = !Languages.Level || Languages.Level.trim() === '';

   // Check if any error exists in the current work experience
   if ( this.LanguageError[i] || this.LevelError[i]
   ) {
    hasAnyErrorLanguages = true;

   }
  }

  const areAllLanguagesValid = this.Languages.every((Languages) => this.islanguages(Languages));
// If all work experiences are completed without errors, move to the next step
if (!hasAnyErrorLanguages && !areAllLanguagesValid) {
 /* const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/

      this.stepsCompleted[7] = true;
      this.nextStep();

}
  }

  if (step === 'step8') {

    this.InterestsHobbiesError = this.Interests.length === 0;
    // Return true if there are no errors
    if (!this.InterestsHobbiesError ) {
     /* const num = parseInt(step.replace('step', ''), 10);
      this.stepstruefuls[num][step] = true;*/
      this.stepsCompleted[8] = true;
      this.nextStep();

    }

  }




}


islanguages(languages: any): boolean {
  return languages.langage && languages.level;
}


  iscertificationCompleted(certification: any): boolean {
    return certification.certificationName && certification.organization && certification.dateOfCompletion;
  }

  isEducationCompleted(education: any): boolean {
    return education.InstitutionName && education.Study && education.locationEducation && education.typeEducation && education.startDateEducation && education.endDateEducation;
  }
  isExperienceCompleted(experience: any): boolean {
    return experience.companyName && experience.position && experience.location && experience.TypeExperience && experience.startDate && experience.endDate && experience.companyDescription;
  }




  Interests: Interests[] = [];
  newInterests: string = '';
  InterestsisDuplicate: boolean = false;
  addInterests() {
    if (this.newInterests.trim() && !this.Interests.some(interest => interest.interest === this.newInterests.trim())) {
      this.Interests.push({ id: this.Interests.length + 1, interest: this.newInterests.trim(),personID:0 });
      this.newInterests = '';
      this.InterestsisDuplicate = false;
    } else {
      this.InterestsisDuplicate = true;
    }
  }

  removeInterests(index: number) {
    this.Interests.splice(index, 1);
  }



  newSkill: string = '';
  skills: Skills[] = [];
  isDuplicate: boolean = false;

  addSkill() {
    if (this.newSkill.trim() && !this.skills.some(skill => skill.skill === this.newSkill.trim())) {
      this.skills.push({ ID: this.skills.length + 1, skill: this.newSkill.trim(),personID:0 });
      this.newSkill = '';
      this.isDuplicate = false;
    } else {
      this.isDuplicate = true;
    }
  }



  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }



  workExperienceVisibility: boolean[] = [];
  workEducationVisibility: boolean[] = [];


  // Your existing component code

  toggleWorkExperienceVisibility(index: number): void {
    this.workExperienceVisibility[index] = !this.workExperienceVisibility[index];
  // Hide other work experience sections
  for (let i = 0; i < this.workExperienceVisibility.length; i++) {
    if (i !== index) {
      this.workExperienceVisibility[i] = false;
    }
  }
  }

  toggleEducationVisibility(index: number): void {
    this.workEducationVisibility[index] = !this.workEducationVisibility[index];
  // Hide other work experience sections
  for (let i = 0; i < this.workEducationVisibility.length; i++) {
    if (i !== index) {
      this.workEducationVisibility[i] = false;
    }
  }
  }



  education : Educations[]=[];
  addEducation() {
    this.education.push({
      id: 0,
      InstitutionName : '',
      Study : '',
      locationEducation : '',
      typeEducation : '',
      startDateEducation : new Date(),
      endDateEducation : new Date(),
      personID:0
    }); // Add a new work experience
  }


  workExperiences: WorkExperience[] = [];

  addWorkExperience() {
    this.workExperiences.push({
      id: 0,
      companyName: '',
      position: '',
      location: '',
      TypeExperience: '',
      startDate: '',
      endDate: '',
      companyDescription: '',
      personID :0
    }); // Add a new work experience
  }



  deleteWorkExperience(index: number) {
    this.workExperiences.splice(index, 1);

     // Remove the corresponding errors from the error arrays
  this.companynameError.splice(index, 1);
  this.PositionError.splice(index, 1);
  this.LocationError.splice(index, 1);
  this.TypeExperienceError.splice(index, 1);
  this.StartDateError.splice(index, 1);
  this.EndDateError.splice(index, 1);
  this.CompanyDescriptionError.splice(index, 1);
  }

  deleteEducation(index: number) {
    this.education.splice(index, 1);
    this.InstitutionNameError.splice(index, 1);
    this.StudyError.splice(index, 1);
    this.locationEducationError.splice(index, 1);
    this.TypeExperienceError.splice(index, 1);
    this.startDateEducationError.splice(index, 1);
    this.endDateEducationError.splice(index, 1);
  }


/** */
InstitutionName :string= '';
Study :string= '';
locationEducation :string= '';
typeEducation :string= '';
startDateEducation :  Date = new Date();
endDateEducation : Date = new Date();
/** */

Country: string = '';
CompanyName: string = '';
Position:  string = '';
Location: string = '';
CompanyDescription: string = '';
/*
calculateWidth() {
  return (this.currentStepIndex * 11.1111111111) + '%';
}*/

  selectedImage:  string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  tel: string = '';
  linkedIn: string = '';
Address:  string = '';
City:  string = '';
//State:  string = '';
Website:  string = '';
TargetTitle: string = '';
ProfessionalSummarie:  string = '';
StartDate:  Date = new Date();
EndDate:  Date = new Date();

currentDate = new Date();

InscriptStep() {
    this.PasswordError = !this.password || this.password.trim() === '';
    this.RepeatpasswordError= !this.confermedpassword || this.confermedpassword.trim() === '';

   if(!this.PasswordError){
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.password)) {
      this.passwordiseasy = true;
    }else{
      this.passwordiseasy = false;
    }
  }


if(!this.PasswordError && !this.RepeatpasswordError){

  this.confermedpasswordnotcorrect=  !(this.password.trim() === this.confermedpassword.trim());


}

if(!this.PasswordError &&  !this.RepeatpasswordError && !this.passwordiseasy && !this.confermedpasswordnotcorrect){

  if (this.areAllStepsCompleted(this.stepsCompleted)) {
    const personInputWithoutRelated = {
      firstName: this.firstName,
      lastName: this.lastName,
      mailAddress: this.email,
      phoneNumber: this.tel,
      linkedIn: this.linkedIn,
      image: "newimage.png", // Assuming this is the image path
      address: this.Address,
      country: this.Country,
      city: this.City,
      website: this.Website,
      targetTitle: this.TargetTitle,
      professionalSummary: this.ProfessionalSummarie, // Corrected spelling
      password: this.password,
      lastConnection: this.currentDate, // Assuming this is a DateTime field
      certifications: this.certification.map(cert => ({
        certificationName: cert.certificationName,
        organization: cert.organization,
        dateOfCompletion: cert.dateOfCompletion,
      })),
      educations: this.education.map(edu => ({
        institutionName: edu.InstitutionName,
        fieldOfStudy: edu.Study,
        location: edu.locationEducation,
        type: edu.typeEducation,
        startDate: edu.startDateEducation,
        endDate: edu.endDateEducation,
      })),
      experiences: this.workExperiences.map(exp => ({
        companyName: exp.companyName,
        position: exp.position,
        location: exp.location,
        type: exp.TypeExperience,
        startDate: exp.startDate,
        endDate: exp.endDate,
        companyDescription: exp.companyDescription,
      })),
      languages: this.Languages.map(lang => ({
        langage: lang.langage,
        level: lang.Level,
      })),
      skills: this.skills.map(skill => ({
        skill: skill.skill,
      })),
      interest_Hobbies: this.Interests.map(interest => ({
        interestAndHobbie: interest.interest,
      }))
    };

    // Call the createPersonAndRelatedEntities method from your service
    this.inscriptionResolver.createPersonAndRelatedEntities(personInputWithoutRelated).subscribe(
      (response) => {
        console.log('Person and related entities created successfully:', response);
        // Handle success, if needed
        this.clearFormData();
      },
      (error) => {
        console.error('Error creating person and related entities:', error);
        // Handle error, if needed
      }
    );
  } else {
    console.log('Not all steps are completed.');
  }


}


}

clearFormData() {
  this.firstName = '';
  this.lastName = '';
  this.email = '';
  this.tel = '';
  this.linkedIn = '';
  this.Image = '';
  this.Address = '';
  this.Country = '';
  this.City = '';
  this.Website = '';
  this.TargetTitle = '';
  this.ProfessionalSummarie = '';
  this.password = '';
  this.currentDate = new Date();
  this.certification = [];
  this.education = [];
  this.workExperiences = [];
  this.Languages = [];
  this.skills = [];
  this.Interests = [];
  // Clear any error flags or step completion status
  this.stepsCompleted = this.stepsCompleted.map(() => false);
  this.companynameError = [];
  this.PositionError = [];
  this.LocationError = [];
  this.TypeExperienceError = [];
  this.StartDateError = [];
  this.EndDateError = [];
  this.CompanyDescriptionError = [];
  this.InstitutionNameError = [];
  this.StudyError = [];
  this.locationEducationError = [];
  this.typeEducationError = [];
  this.startDateEducationError = [];
  this.endDateEducationError = [];
  this.CertificationsNameError = [];
  this.organizationError = [];
  this.CompletionError = [];
  this.LanguageError = [];
  this.LevelError = [];
  this.InterestsHobbiesError = false;
  this.newSkillError = false;
  this.passwordiseasy = false;
  this.confermedpasswordnotcorrect = false;
}


currentStepIndex=0;
step:string = "step0"

nextStep() {
  if(this.step != 'step9')
     this.currentStepIndex++;
     this.step ='step' + this.currentStepIndex ;
     this.changeStep(this.currentStepIndex);
}
previousStep() {
  if(this.step != 'step0')
      this.currentStepIndex--;
      this.step ='step' + this.currentStepIndex ;
      this.changeStep(this.currentStepIndex);
}

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

/**certification */
CertificationsVisibility : boolean[] = [];

toggleCertificationsVisibility(index: number): void {
  this.CertificationsVisibility[index] = !this.CertificationsVisibility[index];
// Hide other work experience sections
for (let i = 0; i < this.CertificationsVisibility.length; i++) {
  if (i !== index) {
    this.CertificationsVisibility[i] = false;
  }
}
}


certification: Certifications[] = [];

addCertification() {
  this.certification.push({
    id: 0,
    certificationName: '',
    organization: '',
    dateOfCompletion: new Date(),
    personID:0
  }); // Add a new work experience
}

deleteCertification(index: number) {
  this.certification.splice(index, 1);
  this.CertificationsNameError.splice(index, 1);
  this.organizationError.splice(index, 1);
  this.CompletionError.splice(index, 1);
}

/**language */


LanguagesVisibility : boolean[] = [];

toggleLanguagesVisibility(index: number): void {
  this.LanguagesVisibility[index] = !this.LanguagesVisibility[index];
// Hide other work experience sections
for (let i = 0; i < this.LanguagesVisibility.length; i++) {
  if (i !== index) {
    this.LanguagesVisibility[i] = false;
  }
}
}



Languages: Languages[] = [];

addLanguage() {
  this.Languages.push({
    id:0,
    langage: '',
    Level: '',
    personID:0
  }); // Add a new work experience
}

deleteLanguage(index: number) {
  this.Languages.splice(index, 1);
  this.LanguageError.splice(index, 1);
  this.LevelError.splice(index, 1);
}

/*
// Initialize the steps object
stepstruefuls: { [key: string]: boolean }[] = [
  { 'step0': false },
  { 'step1': false },
  { 'step2': false },
  { 'step3': false },
  { 'step4': false },
  { 'step5': false },
  { 'step6': false },
  { 'step7': false },
  { 'step8': false }
];
*/
changeStep(step: number): void {


//if(this.stepstruefuls[step]['step'+step]){
  const steps = document.querySelectorAll('.step');
  const lines = document.querySelectorAll('.line');

  steps.forEach((item: Element, index: number) => {
    if (index < step) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  lines.forEach((line: Element, index: number) => {
    if (index < step - 1) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });

  this.step="step"+step;

  this.currentStepIndex = step;
}



password:string='';
confermedpassword:string='';



}
//}

